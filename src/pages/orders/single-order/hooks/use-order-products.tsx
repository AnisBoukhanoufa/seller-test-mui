import { useState, useEffect, useCallback } from "react";

const useHandleOrderProducts = (
  orderInfo,

) => {
  const [productsToShow, setProductsToShow] = useState([]);
  const [openAddProduct, setOpenAddProduct] = useState(false);
  const [openWarningDeleteProduct, setOpenWarningDeleteProduct] =
    useState(false);
  const [productToDelete, setProductToDelete] = useState("");
  const [openEditProduct, setOpenEditProduct] = useState(false);
  const [productToEdit, setProductToEdit] = useState("");

  useEffect(() => {
    if (orderInfo?.products) setProductsToShow(orderInfo.products);
  }, [orderInfo?.products]);

  const handleOpenAddProductDialog = useCallback(() => {
    setOpenAddProduct(true);
  }, []);

  const handleCloseAddProductDialog = useCallback(() => {
    setOpenAddProduct(false);
  }, []);

  const handleClickDeleteProduct = useCallback((product) => {
    setProductToDelete(product);
    setOpenWarningDeleteProduct(true);
  }, []);

  const handleCloseDeleteProductPopup = useCallback(() => {
    setOpenWarningDeleteProduct(false);
    setProductToDelete("");
  }, []);

  const handleEditProduct = useCallback((selectedProduct) => {
    setProductToEdit(selectedProduct);
    setOpenEditProduct(true);
  }, []);

  const handleCloseEditProductDialog = useCallback(() => {
    setOpenEditProduct(false);
  }, []);

  return {
    openAddProduct,
    setOpenAddProduct,
    handleOpenAddProductDialog,
    handleCloseAddProductDialog,
    productsToShow,
    openWarningDeleteProduct,
    handleClickDeleteProduct,
    handleCloseDeleteProductPopup,
    productToDelete,
    openEditProduct,
    setOpenEditProduct,
    productToEdit,
    handleEditProduct,
    handleCloseEditProductDialog,
  };
};

export default useHandleOrderProducts;
