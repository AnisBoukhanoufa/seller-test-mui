import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import whatsapp from "assets/whatsapp.svg";

const UserInput = ({ label, value, id, onChange, edit, fullPhone }) => {
  console.log("fff", fullPhone);
  return (
    <div className="detailItem">
      <label>{label} :</label>
      <BootstrapInput
        value={value}
        id={id}
        readOnly={!edit}
        editstate={edit.toString()}
        onChange={onChange}
      />
      {fullPhone && (
        <div
          className="whatsappButton"
          onClick={() => window.open(`https://wa.me/+${fullPhone}`, "_blank")}
          style={{
            cursor: "pointer",
            display: "inline-block",
            marginLeft: "10px",
          }}
        >
          <img src={whatsapp} alt="WhatsApp" />
        </div>
      )}
    </div>
  );
};

// Styling the BootstrapInput component using styled MUI's InputBase
const BootstrapInput = styled(InputBase)(({ theme, editstate }) => ({
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor:
      editstate === "true"
        ? "#FFFFFF !important"
        : theme.palette.mode === "light"
          ? "#F3F6F9"
          : "#1A2027",
    border: "1px solid",
    borderColor:
      editstate === "true"
        ? "#D6D6D6"
        : theme.palette.mode === "light"
          ? "#E0E3E7"
          : "#2D3843",
    fontSize: 16,
    width: "auto",
    padding: "5px 10px",
    boxShadow: editstate === "true" ? "0 0 4px rgba(128, 128,128, 0.1)" : "",
    "&:focus": {
      borderColor:
        editstate === "true"
          ? "var(--color-secondary)"
          : theme.palette.mode === "light"
            ? "#A0A0A0"
            : "#3A3A3A",
      backgroundColor:
        editstate === "true"
          ? "#FFFFFF"
          : theme.palette.mode === "light"
            ? "#F3F6F9"
            : "#1A2027",
    },
  },
}));

export default UserInput;
