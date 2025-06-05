import { ButtonGroup, Button } from "@mui/material";
import "./products-display-button-group.scss";
import { EnumDisplayMode } from "statics/enums";
import AppsIcon from "@mui/icons-material/Apps";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { useDispatch } from "react-redux";

const ProductsDisplay = ({
  displayMode = EnumDisplayMode.table,
  changeDisplayMode,
}) => {
  const dispatch = useDispatch();

  return (
    <ButtonGroup
      variant="outlined"
      aria-label="outlined button group"
      className="button-grp-display"
    >
      <Button
        className={displayMode === EnumDisplayMode.cards ? "checked" : ""}
        onClick={() => {
          dispatch(changeDisplayMode(EnumDisplayMode.cards));
        }}
      >
        <AppsIcon sx={{ fontSize: "1.7em" }} />
      </Button>
      <Button
        className={displayMode === EnumDisplayMode.table ? "checked" : ""}
        onClick={() => {
          dispatch(changeDisplayMode(EnumDisplayMode.table));
        }}
      >
        <FormatListBulletedIcon sx={{ fontSize: "1.7em" }} />
      </Button>
    </ButtonGroup>
  );
};

export default ProductsDisplay;
