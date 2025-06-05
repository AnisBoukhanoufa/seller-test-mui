import { Button } from "@mui/material";

type AuthButtonProps = {
  text: string;
  disabled?: boolean;
};

const AuthButton = ({ text, disabled = false }: AuthButtonProps) => {
  const buttonStyles = {
    backgroundColor: "var(--color-primary-blue)",
    borderRadius: "9999px",
    fontSize: { sm: 16, md: 20 },
    fontWeight: 500,
    textTransform: "capitalize",
    fontFamily: " var(--font-roboto), sans-serif",
  };

  return (
    <Button
      variant="contained"
      disabled={disabled}
      sx={buttonStyles}
      type="submit"
    >
      {text}
    </Button>
  );
};

export default AuthButton;
