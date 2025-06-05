import CheckIcon from "@mui/icons-material/Check";

const CustomStepIcon = (props) => {
  const { className } = props;
  const { singleStatus, statusTitle } = props; // Get status object from props
  const isCall = statusTitle.startsWith("call");
  return (
    <div
      className={className}
      style={{
        backgroundColor: singleStatus.isVisible?isCall
          ? "var(--color-gray)"
          : `var(--color-${singleStatus.status})`:"#D3D3D3",
        borderRadius: "50%",
        width: isCall ? 15 : 25,
        height: isCall ? 15 : 25,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 10,
      }}
    >
      {!isCall && (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <CheckIcon fontSize="small" />
        </span>
      )}
    </div>
  );
};

export default CustomStepIcon;
