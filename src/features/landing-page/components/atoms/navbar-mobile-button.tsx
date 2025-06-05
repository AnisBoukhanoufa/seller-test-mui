import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

type NavbarMobileButtonProps = {
  onClick: () => void;
  open: boolean;
};
export default function NavbarMobileButton({
  onClick,
  open,
}: NavbarMobileButtonProps) {
  return (
    <div className="xl:hidden">
      <IconButton
        style={{ padding: 0 }}
        onClick={onClick}
        className="text-white xl:hidden"
      >
        {open ? (
          <CloseIcon fontSize="large" className="text-white" />
        ) : (
          <MenuIcon fontSize="large" className="text-white" />
        )}
      </IconButton>
    </div>
  );
}
