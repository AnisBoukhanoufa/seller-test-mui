import { FC } from "react";
import { ButtonGroup, Button } from "@mui/material";

interface OnlineButtonGroupProps {
  onlineFilter: string; // current selected filter
  userCounts: { onlineCount: number }; // to show the employee counts
  onFilterChange: (filter: string) => void; // handler function for filter change
}

const OnlineButtonGroup: FC<OnlineButtonGroupProps> = ({
  onlineFilter,
  userOnlineCounts,
  onFilterChange,
}) => {
  return (
    <ButtonGroup variant="outlined" aria-label="Basic button group">
      <Button
        onClick={() => onFilterChange("all")}
        variant={onlineFilter === "all" ? "contained" : "outlined"}
        className={onlineFilter === "all" ? "selected-button" : ""}
      >
        All
      </Button>

      <Button
        onClick={() => onFilterChange("online")}
        variant={onlineFilter === "online" ? "contained" : "outlined"}
        className={onlineFilter === "online" ? "selected-button" : ""}
      >
        Online <span>({userOnlineCounts || 0})</span>
      </Button>

      <Button
        onClick={() => onFilterChange("offline")}
        variant={onlineFilter === "offline" ? "contained" : "outlined"}
        className={onlineFilter === "offline" ? "selected-button" : ""}
      >
        Offline
      </Button>
    </ButtonGroup>
  );
};

export default OnlineButtonGroup;
