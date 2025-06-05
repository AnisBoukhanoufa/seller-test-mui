import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface items {
  item: any;
}
export default function SidebarItem({ item }: items) {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  if (item?.childrens) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <li
          className="sidebar-title sidebarLink"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={item.img} className="icon-sidebar" />
            <span className="capitalize">{t(item.name)}</span>
          </div>

          <div className="toggle-button">
            <KeyboardArrowDownIcon className="toggle-icon-sidebar" />
          </div>
        </li>
        {open && (
          <div className="sidebar-content">
            {item.childrens.map((child: any, index: any) => {
              return <SidebarItem key={index} item={child} />;
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <li>
        <Link
          className="sidebarLink capitalize"
          to={`/${item.link}`}
          id={active.startsWith(item.link) ? "active" : ""}
          onClick={() => {
            setActive(item.link);
          }}
        >
          <img src={item.img} className="icon-sidebar" />
          <span>{t(item.name)}</span>
        </Link>
      </li>
    );
  }
  // return (
  //   <li>
  //     <Link
  //       className="sidebarLink"
  //       to={`/${item.link}`}
  //       id={active.startsWith(item.link) ? "active" : ""}
  //       onClick={() => {
  //         setActive(item.link);
  //       }}
  //     >
  //       <img src={item.img} className="icon" />
  //       <span>{t(item.name)}</span>
  //     </Link>
  //   </li>
  // );
}
