import { ButtonGroup, Button } from "@mui/material";
import "./filter-button-group.scss";
import { t } from "i18next";

const FilterButtonGroup = ({
  queryFilter,
  setFilterOpen,
  handleClear,
  countColorFilter,
}) => {
  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      className="button-grp-filter"
    >
      <Button
        className={`filter-btn ${
          Object.keys(queryFilter).length > countColorFilter ? "filtered" : ""
        }`}
        onClick={() => setFilterOpen(true)}
      >
        <svg
          id="Layer_1"
          height="512"
          viewBox="0 0 24 24"
          width="512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path d="m14 24a1 1 0 0 1 -.6-.2l-4-3a1 1 0 0 1 -.4-.8v-5.62l-7.016-7.893a3.9 3.9 0 0 1 2.916-6.487h14.2a3.9 3.9 0 0 1 2.913 6.488l-7.013 7.892v8.62a1 1 0 0 1 -1 1zm-3-4.5 2 1.5v-7a1 1 0 0 1 .253-.664l7.268-8.177a1.9 1.9 0 0 0 -1.421-3.159h-14.2a1.9 1.9,0 0 0 -1.421 3.158l7.269 8.178a1 1 0 0 1 .252.664z" />
        </svg>
        <span className="capitalize"> {t("filter")}</span>
      </Button>
      <Button className="clear" onClick={handleClear}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="Outline"
          viewBox="0 0 24 24"
          width="512"
          height="512"
        >
          <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
          <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
          <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
        </svg>
        <span className="capitalize"> {t("clear")}</span>
      </Button>
    </ButtonGroup>
  );
};

export default FilterButtonGroup;
