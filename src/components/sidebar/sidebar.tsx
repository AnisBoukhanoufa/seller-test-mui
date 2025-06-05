import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./sidebar.scss";
import { useTranslation } from "react-i18next";
import logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-sidebar.svg";
import home from "../../assets/home-icon.svg";
import affiliateOrders from "../../assets/order-affiliate-icon.svg";
import orders from "../../assets/orders-icon.svg";
import toopDrop from "../../assets/toop-drop-icon.svg";
import products from "../../assets/products-icon.svg";
import sellerProducts from "../../assets/product-seller-icon.svg";
import affiliateProducts from "../../assets/product-affiliate-icon.svg";
import payments from "../../assets/payments-icon.svg";
import logout1 from "assets/logout-icon.svg";
import sourcing from "assets/sourcing-icon.svg";
import invoice from "assets/invoice.svg";
import billing from "assets/billing-icon.svg";
import simulation from "assets/simulation-icon.svg";
import SidebarItem from "./sidebar-item";
import pricing from "assets/pricing-icon.svg";

import { logout } from "state/api-calls/seller-calls";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";

import { EnumSellerRole } from "statics/enums";

const Sidebar = ({ seller }) => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const sidebarElements = [
    {
      name: "home",
      img: home,
      link: "home",
    },

    seller.role === EnumSellerRole.seller
      ? {
          name: "toop drop",
          img: toopDrop,
          link: "toopDrop",
          childrens: [
            {
              name: "products",
              img: products,
              link: "products-toop-drop",
            },
            {
              name: "orders",
              img: orders,
              link: "orders-toop-drop",
            },
            {
              name: "invoices",
              img: invoice,
              link: "invoices-toop-drop",
            },
          ],
        }
      : {
          name: "products",
          img: affiliateProducts,
          link: "products-affiliate-seller",
        },
    seller.role === EnumSellerRole.seller
      ? {
          name: "my products",
          img: sellerProducts,
          link: "products",
          childrens: [
            {
              name: "products",
              img: products,
              link: "products-normal-seller",
            },
            {
              name: "orders",
              img: orders,
              link: "orders-normal-seller",
            },
            {
              name: "invoices",
              img: invoice,
              link: "invoices-normal-seller",
            },
          ],
        }
      : {
          name: "orders",
          img: affiliateOrders,
          link: "orders-affiliate-seller",
        },

    seller.role === EnumSellerRole.seller
      ? {
          name: "sourcing",
          img: sourcing,
          link: "sourcings",
        }
      : null,

    {
      name: "simulation",
      img: simulation,
      link: "simulation",
    },
    seller.role === EnumSellerRole.affiliate
      ? {
          name: "payments",
          img: payments,
          link: "payments",
        }
      : null,
    seller.role === EnumSellerRole.seller
      ? {
          name: "billings",
          img: billing,
          link: "billings",
          childrens: [
            {
              name: "pricing",
              img: pricing,
              link: "pricing",
            },

            // {
            //   name: "invoices",
            //   img: invoice,
            //   link: "invoices",
            // },
            {
              name: "payments",
              img: payments,
              link: "payments",
            },
          ],
        }
      : null,
  ];

  // Responsivity
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    if (isSmallDevice) {
      setIsSidebarOpen(true);
    }
  }, [isSmallDevice]);

  // Define the type for the state
  type SidebarState = boolean;

  // Initial state for the sidebar, set to 'false' if there's no value in localStorage
  const [isSidebarOpen, setIsSidebarOpen] = useState<SidebarState>(
    JSON.parse(localStorage.getItem("isSidebarOpen") || "false")
  );

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState: any) => !prevState);
  };

  // Update localStorage whenever the sidebar state changes
  useEffect(() => {
    localStorage.setItem("isSidebarOpen", JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${isSidebarOpen ? "smallSidebar" : ""}`}>
      <div
        className={`toggleSidebar ${
          i18n.language == "ar" ? "arToggleButton" : "enToggleButton"
        }`}
        onClick={toggleSidebar}
      >
        <img src={arrow} />
      </div>
      <div className="sidebarContainer">
        <div className="top">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span className="logo">
              <img src={logo} alt="COD TOOP" />
              <p>COD TOOP</p>
            </span>
          </Link>
        </div>
        <div className="center">
          <ul>
            {sidebarElements
              .filter((e) => e !== null)
              .map((item, index) => {
                return <SidebarItem key={index} item={item} />;
              })}
          </ul>

          <div className="logout" onClick={() => logout(dispatch)}>
            <img src={logout1} className="icon-sidebar" />
            <span>{t("logout")}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
