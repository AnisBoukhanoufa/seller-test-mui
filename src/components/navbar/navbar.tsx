import "./navbar.scss";

import "utils/i18n";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import settingsIcon from "assets/icons/settings-icon.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const seller = useSelector((state: any) => state.seller.currentSeller);

  return (
    <div className="navbar">
      <div className="warpper">
        <div className="items">
          <div className="item notification">
            <Link sx={{ p: 0, m: 0 }} to={`/settings`}>
              <img src={settingsIcon} alt="s" className="icon-navbar" />
            </Link>
          </div>

          <div className="item">{seller?.username}</div>
          <div className="item">
            <Avatar sx={{ bgcolor: "#023e8a" }}>
              {seller.username
                ? seller.username.toUpperCase().split(" ")[0][0]
                : "C"}
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
