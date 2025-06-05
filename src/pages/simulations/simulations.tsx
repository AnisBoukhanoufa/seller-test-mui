import "./simulations.scss";
import { useTranslation } from "react-i18next";
import callCenter from "../../assets/call-center.svg";
import tasks from "../../assets/tasks.svg";
import shipping from "../../assets/shipping.svg";

import { useEffect, useRef, useState } from "react";
import { baseRequest } from "utils/request-methods";
import { useDispatch, useSelector } from "react-redux";
import {
  updateSimulationCreatorId,
  updateSimulationInputs,
  updateSimulationName,
  updateSimulationUpdatedAt,
} from "state/simulation-redux";

import SimulationNameDialog from "./pop-ups/save-new-simulation";
import ConfirmationDialog from "./pop-ups/confirm-change-old-simulation";
import ScrollDetail from "./components/scrol-detail";

import SimulationHeader from "./sections/simulations-header";
import RatesSection from "./sections/rates";
import SimulationResults from "./sections/results";
import FeeSimulation from "./sections/details";
import useCalculations from "./hooks/use-calculations";
import { errorHandler, successHandler } from "state/api-calls";
const focusClear = (e: { target: { value: string } }) => {
  if (Number(e.target.value) === 0) {
    e.target.value = ""; // Clear the field when focused if it was zero
  }
};

const Simulation = () => {
  const { t } = useTranslation();

  const [openDialog, setOpenDialog] = useState(false);
  const [newSimulationName, setNewSimulationName] = useState("");

  const dispatch = useDispatch();
  const {  inputs, simulation,updatedAt } = useSelector(
    (state) => state.simulation
  );
  //handle multiple simulation
  const [simulations, setSimulations] = useState([]);

  const [choosenSimulation, setChoosenSimulation] = useState(simulation);

  const [openConfirmationDialog, setOpenConfirmationDialog] = useState(false);

  const blurValue = (e: { target: { value: string } }) => {
    if (e.target.value === "" || e.target.value === null) {
      e.target.value = "0"; // Revert to zero if the field is left empty
      const id = e.target.name;
      dispatch(updateSimulationInputs({ [id]: 0 })); // Update Redux state to 0
    }
    if (Number(e.target.value) === 0) {
      e.target.value = "0"; // Revert to zero if the field is left empty
      const id = e.target.name;
      dispatch(updateSimulationInputs({ [id]: 0 }));
    }
  };

  //get simulations
  useEffect(() => {
    try {
      const fetchData = async () => {
        const res = await baseRequest.get(`/simulation/name-pagination`);
        setSimulations(res.data.list);
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  //handle choose simulation
  useEffect(() => {
    try {
      if (
        choosenSimulation._id
      ) {
        const fetchData = async () => {
          const res = await baseRequest.get(
            `/simulation/single/${choosenSimulation._id}`
          );
          if (updatedAt === "" || res.data._doc.updatedAt !== updatedAt) {
            dispatch(updateSimulationInputs({ ...res.data._doc.inputs }));
            dispatch(updateSimulationName(choosenSimulation));
            dispatch(updateSimulationCreatorId(res.data._doc.creatorId));
            dispatch(updateSimulationUpdatedAt(res.data._doc.updatedAt));
          }
        };
        fetchData();
      }
    } catch (err) {
      console.log(err);
    }
  }, [choosenSimulation, dispatch, simulation._id, updatedAt]);

  const {
    productCostTotal,
    quantity,
    totalConfirmation,
    leadsConfirmation,
    adsTotal,
    totalCostDelivery,
    totalCostReturn,
    upsellQuantityDelivered,
    feeTotal,
    totalExtraExpenses,
    wills,
    investedCapital,
    adsCostPerPieceSold,
    totalProfitUpsell,
    payment,
    netProfit,
    profitToCapitalRatio,
  } = useCalculations(inputs);

  const handleNewSimulation = () => {
    dispatch(
      updateSimulationInputs({
        price: 0,
        leads: 0,
        confirmationRate: 0,
        deliveryRate: 0,
        upsellRate: 0,
        productCost: 0,
        adsCost: 0,
        extraExpenses: 0,
        confirmationFee: 0,
        upsellFee: 0,
        upsellProductCost: 0,
        upsellPrice: 0,
        deliveryFee: 0,
        returnFee: 0,
        vatFee: 0,
        codFee: 0,
      })
    );
    dispatch(updateSimulationName({ _id: "" }));
    setChoosenSimulation({ _id: "" });
    dispatch(updateSimulationCreatorId(""));
    dispatch(updateSimulationUpdatedAt(""));
  };
  const handleInput = (e: any) => {
    const id = e.target.name;
    let value = e.target.value;

    // Keep only digits (remove decimals or other characters)
    if (id === "leads") {
      value = value.split(".")[0];
    }

    // Check if the value is empty string, if so set it to null
    const parsedValue = value === "" ? null : Number(value);

    dispatch(updateSimulationInputs({ [id]: parsedValue }));
  };

  const handleSave = async () => {
    if (!simulation._id) {
      setOpenDialog(true);
    } else {
      setOpenConfirmationDialog(true);
    }
  };

  const handleConfirmSave = async () => {
    try {
      const response = await baseRequest.post("/simulation", {
        name: simulation?._id ? simulation?.name : newSimulationName,
        inputs, // Include necessary inputs data to be saved
      });
      successHandler(response.data.responseMessage, dispatch);
      simulation._id === ""
        ? setOpenDialog(false)
        : setOpenConfirmationDialog(false); // Close the dialog
      // Handle success response, update state, etc.
    } catch (error) {
      errorHandler(error, dispatch);
      simulation._id === ""
        ? console.error("Failed to save new simulation:", error)
        : console.error("Failed to save changes to simulation:", error);
    }
  };

  //handle scroll
  const containerRef = useRef(null);

  return (
    <div className="singleSimulation">
      <div className="singleContainer overflowPreventerFlexbox">
        <SimulationNameDialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          newSimulationName={newSimulationName}
          setNewSimulationName={setNewSimulationName}
          onConfirm={handleConfirmSave}
        />
        <ConfirmationDialog
          open={openConfirmationDialog}
          onClose={() => setOpenConfirmationDialog(false)}
          onConfirm={handleConfirmSave}
        />
        <ScrollDetail
          choosenSimulation={choosenSimulation}
          containerRef={containerRef}
        />
        <div className="bottom">
          <div className="overflowPreventer" ref={containerRef}>
            <div className="title">{t("simulation")}</div>
            <SimulationHeader
              simulations={simulations}
              choosenSimulation={choosenSimulation}
              setChoosenSimulation={setChoosenSimulation}
              handleNewSimulation={handleNewSimulation}
              handleSave={handleSave}
            />
            <RatesSection inputs={inputs} handleInput={handleInput} />
            <div className="table">
              <FeeSimulation
                inputs={inputs}
                handleInput={handleInput}
                focusClear={focusClear}
                blurValue={blurValue}
                productCostTotal={productCostTotal}
                adsTotal={adsTotal}
                quantity={quantity}
                leadsConfirmation={leadsConfirmation}
                totalConfirmation={totalConfirmation}
                upsellQuantityDelivered={upsellQuantityDelivered}
                feeTotal={feeTotal}
                totalCostDelivery={totalCostDelivery}
                totalCostReturn={totalCostReturn}
                totalExtraExpenses={totalExtraExpenses}
                wills={wills}
                investedCapital={investedCapital}
                adsCostPerPieceSold={adsCostPerPieceSold}
                totalProfitUpsell={totalProfitUpsell}
                payment={payment}
                netProfit={netProfit}
                profitToCapitalRatio={profitToCapitalRatio}
                tasks={tasks}
                callCenter={callCenter}
                shipping={shipping}
              />
              <SimulationResults
                wills={wills}
                investedCapital={investedCapital}
                adsCostPerPieceSold={adsCostPerPieceSold}
                totalProfitUpsell={totalProfitUpsell}
                payment={payment}
                netProfit={netProfit}
                profitToCapitalRatio={profitToCapitalRatio}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simulation;
