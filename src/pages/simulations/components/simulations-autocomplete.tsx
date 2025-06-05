import { Autocomplete, TextField } from "@mui/material";
import { t } from "i18next";
import { useDispatch } from "react-redux";
import { updateSimulationName } from "state/simulation-redux";

const SimulationAutocomplete = ({
  simulations,
  simulation,
  setChoosenSimulation,
}) => {
  const dispatch = useDispatch();

  return (
    <Autocomplete
      id="simulations"
      loading={simulations.length === 0}
      sx={{
        width: 300,
        height: "56px",
        display: "flex",
        alignItems: "center",
      }}
      options={simulations}
      getOptionLabel={(option) => (option && option.name ? option.name : "")}
      value={simulation}
      onChange={(event, value, reason) => {
        if (reason === "clear") {
          setChoosenSimulation({ _id: "" });
          dispatch(updateSimulationName({ _id: "" }));
        } else {
          setChoosenSimulation(value);
        }
      }}
      renderOption={(props, option) => (
        <li {...props} key={option._id}>
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label={t("choose a simulation")} placeholder="choose a Simulations" />
      )}
    />
  );
};

export default SimulationAutocomplete;
