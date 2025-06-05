import React from "react";
import { Button } from "@mui/material";
import SimulationAutocomplete from "../components/simulations-autocomplete";
import { t } from "i18next";
import { useSelector } from "react-redux";

interface SimulationHeaderProps {
  simulations: any[]; // Replace `any` with the appropriate type
  setChoosenSimulation: React.Dispatch<React.SetStateAction<any>>;
  choosenSimulation: any;
  handleNewSimulation: () => void;
  handleSave: () => void;
}

const SimulationHeader: React.FC<SimulationHeaderProps> = ({
  simulations,
  choosenSimulation,
  setChoosenSimulation,
  handleNewSimulation,
  handleSave,
}) => {
  const seller = useSelector((state: any) => state.seller.currentSeller);
  const { simulation, creatorId } = useSelector((state) => state.simulation);

  return (
    <div className="top">
      <div className="simulations">
        <SimulationAutocomplete
          simulations={simulations}
          simulation={simulation}
          setChoosenSimulation={setChoosenSimulation}
        />
        <Button
          onClick={handleNewSimulation}
          className="secondary-button"
          variant="outlined"
        >
          {t("new")}
        </Button>
      </div>

      {(seller?._id === creatorId || choosenSimulation?._id === "") && (
        <Button
          onClick={handleSave}
          className="primary-button"
          variant="contained"
        >
          {t("save")}
        </Button>
      )}
    </div>
  );
};

export default SimulationHeader;
