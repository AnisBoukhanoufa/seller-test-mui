import { Suspense, useState } from "react";
import { useLocation } from "react-router-dom";

import "../single-order/single-order.scss";
import OrderInfoSection from "../single-order/sections/order-info";
import TrackingSection from "../single-order/sections/tracking";
import ProductsSection from "../single-order/sections/products";
import useSingleFetch from "hooks/use-single-fetch";
import NotFound from "pages/not-found/not-found";

import ClientOrderEdit from "pages/orders/single-order/pop-up/edit-client-infos/edit-client-info";
import InfoOrderEdit from "pages/orders/single-order/pop-up/edit-order-info/edit-order-info";
import {
  getSingleOrderToopDrop,
  updateOrderToopDrop,
  updateOrderToopDropProducts,
} from "state/api-calls/order-toop-drop-calls";
import { EnumSellerRole } from "statics/enums";

const SingleOrderToopDrop = () => {
  const location = useLocation();
  const itemId = location.pathname.split("/")[2];
  const [openEditClientDialog, setOpenEditClientDialog] = useState(false);
  const [openEditOrderInfoDialog, setOpenEditOrderInfoDialog] = useState(false);

  const singleDataHandeler = useSingleFetch(itemId, getSingleOrderToopDrop);

  const handleOpenEditOrderInfoDialog = () => {
    setOpenEditOrderInfoDialog(true);
  };

  const handleOpenEditClientInfoDialog = () => {
    setOpenEditClientDialog(true);
  };

  return singleDataHandeler?.notFound ? (
    <Suspense fallback={<div></div>}>
      <NotFound />
    </Suspense>
  ) : (
    <div className="singleOrder">
      <ClientOrderEdit
        open={openEditClientDialog}
        setOpen={setOpenEditClientDialog}
        orderInfo={singleDataHandeler.singleData}
        updateOrder={updateOrderToopDrop}
        fetchSingleData={singleDataHandeler.fetchSingleData}
      />
      <InfoOrderEdit
        open={openEditOrderInfoDialog}
        setOpen={setOpenEditOrderInfoDialog}
        orderInfo={singleDataHandeler.singleData}
        updateOrder={updateOrderToopDrop}
        fetchSingleData={singleDataHandeler.fetchSingleData}
      />

      <div className="singleContainer overflowPreventerFlexbox">
        {singleDataHandeler?.singleData && (
          <div className="overflowPreventerContainer">
            <div className="overflowPreventer">
              <div className="top">
                <div className="left min-h-fit">
                  <OrderInfoSection
                    orderInfo={singleDataHandeler.singleData}
                    handleOpenEditClientInfoDialog={
                      handleOpenEditClientInfoDialog
                    }
                    handleOpenEditOrderInfoDialog={
                      handleOpenEditOrderInfoDialog
                    }
                  />
                </div>
                <div className="right">
                  <TrackingSection
                    orderInfo={singleDataHandeler.singleData}
                   />
                </div>
              </div>
              <div className="bottom-order">
                <div className="center">
                  <ProductsSection
                    orderInfo={singleDataHandeler.singleData}
                    fetchSingleData={singleDataHandeler.fetchSingleData}
                    updateOrderProducts={updateOrderToopDropProducts}
                    productType={"toopDrop"}
                    orderType={"toopDrop"}
                    />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleOrderToopDrop;
