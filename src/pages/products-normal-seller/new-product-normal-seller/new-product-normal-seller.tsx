import { useState } from "react";
import "./new-product-normal-seller.scss";
import { Button, Link, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import TextEditor from "components/text-editor/text-editor";

import LinkIcon from "@mui/icons-material/Link";
import ProductCards from "components/product-cards/product-cards-v2";
import useProductSubmission from "./hooks/use-submit";
import useImageUploader from "hooks/use-images-upload";
import useProductData from "./hooks/use-product-data";
import { t } from "i18next";
import CustomSnackbar from "components/snackbar/snackbar";
import SubProductDetail from "components/details-sub-product/details-sub-product-v2";
import useCategoryHandler from "hooks/autocompletes-hooks/use-category";
import CategoriesAutocomplete from "components/autocomplete/category-product-autocomplete";
import ImageUploader from "components/image-uploader/image-uploader";
import MediaGallery from "components/media-gallery/media-gallery";

type InfoValues = {
  name: string;
  description: string;
  seller: string;
  category: string;
  url: string;
};

const NewProductNormalSeller = () => {
  const {
    register: registerInfo,
    handleSubmit: handleSubmitInfo,
    formState: { errors: errorsInfo },
  } = useForm<InfoValues>();

  const [showDetails, setShowDetails] = useState(false);

  //handle images
  const [openGalery, setOpenGalery] = useState(false);

  const { images, setImages, handleDelete } = useImageUploader();

//handle categories
    const {
    choosenCategories,
    categoriesList,
    categoryDetails,
    handleCategoriesChange,
  } = useCategoryHandler();


  //handle new product data
  const {
    data,
    setData,
    setCustomVariations,
    subProducts,
    setSubProducts,
    handleInput,
    selectedSubProduct,
    setSelectedSubProduct,
  } = useProductData(choosenCategories, images, setImages);

  //handle submisson
  const {
    showError,
    handleSubmitNewProduct,
    handleCloseError,
    disableSubmitButton,
  } = useProductSubmission(data, setData);

  

  return (
    <div className="newProductNormalSeller capitalize">
      <div className="newContainer overflowPreventerFlexbox">
        <div className="overflowPreventerContainer">
          <div className="overflowPreventer">
            <h1 className="page-title">{t("new product")}</h1>
            <form
              className="top"
              onSubmit={handleSubmitInfo(handleSubmitNewProduct)}
            >
              <div className="general-infos">
                <div className="inputs">
                  <div className="infos-left">
                    <div className="formInput">
                      <TextField
                        {...registerInfo("name", {
                          required: "name is required",
                          minLength: {
                            value: 2,
                            message: "name must be at least 2 characters",
                          },
                        })}
                        fullWidth
                        id="name"
                        label={t("product name")}
                        variant="outlined"
                        onChange={handleInput}
                      />
                    </div>
                    {errorsInfo?.name && (
                      <p className="errorValidation">
                        {errorsInfo.name.message}
                      </p>
                    )}
                    <div className="formInput url">
                      <TextField
                        {...registerInfo("url", {
                          required: "URL is required",
                          pattern: {
                            value:
                              /^(https?:\/\/)?((([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,})|localhost)(:[0-9]{1,5})?(\/[^\s]*)?(\?[^\s]*)?(#[^\s]*)?$/,
                            message: "Invalid URL format",
                          },
                        })}
                        fullWidth
                        id="url"
                        label={t("product provider url")}
                        variant="outlined"
                        onChange={handleInput}
                      />
                      <Button
                        component={Link}
                        type="button"
                        rel="noopener"
                        target="_blank"
                        href={`${data.url}`}
                        disabled={!data.url}
                      >
                        <LinkIcon />
                      </Button>
                    </div>
                    {errorsInfo?.url && (
                      <p className="errorValidation">
                        {errorsInfo.url.message}
                      </p>
                    )}
                    <div className="formInput">
                      <CategoriesAutocomplete
                        choosenCategories={choosenCategories}
                        categoriesList={categoriesList}
                        handleCategoriesChange={handleCategoriesChange}
                      />
                    </div>
                    {errorsInfo?.category && (
                      <p className="errorValidation">
                        {errorsInfo.category.message}
                      </p>
                    )}
                  </div>
                  <div className="infos-right">
                    <TextEditor data={data} setData={setData} />
                  </div>
                </div>
                <div className="submit-button">
                  <Button
                    className="primary-button"
                    type="submit"
                    variant="outlined"
                    disabled={disableSubmitButton}
                  >
                    <span className="capitalize"> {t("save")}</span>
                  </Button>
                </div>
              </div>

              <div className="sub-product-handle">
                <div className="product-details">
                  <div className="product-details-left">
                    <ImageUploader
                      images={images}
                      onOpenGallery={(e) => {
                        e.preventDefault();
                        setOpenGalery(true);
                      }}
                      onDeleteImage={handleDelete}
                    />
                    <MediaGallery
                      open={openGalery}
                      images={images}
                      onSave={(imagesUrls) => {
                        setImages(imagesUrls);
                      }}
                      onClose={() => {
                        setOpenGalery(false);
                      }}
                    />
                  </div>
                  {showDetails && (
                    <div className="product-details-right">
                      <SubProductDetail
                        categories={choosenCategories}
                        details={categoryDetails}
                        images={images}
                        setSubProducts={setSubProducts}
                        subProducts={subProducts}
                        selectedSubProduct={selectedSubProduct}
                        setSelectedSubProduct={setSelectedSubProduct}
                        setCustomVariations={setCustomVariations}
                        offers={undefined}
                      />
                    </div>
                  )}
                </div>
                {!showDetails && (
                  <Button
                    type="button"
                    variant="outlined"
                    className="add-subProduct-button secondary-button"
                    style={{ margin: "0 10px" }}
                    onClick={() => {
                      setShowDetails(true);
                    }}
                  >
                    <span className="capitalize">
                      {t("add")} {t("sub-product")}
                    </span>
                  </Button>
                )}
              </div>
            </form>

            {subProducts?.length > 0 && (
              <ProductCards
                setSelectedSubProduct={setSelectedSubProduct}
                subProducts={subProducts}
                setSubProducts={setSubProducts}
                data={data}
              />
            )}
          </div>
          <CustomSnackbar
            open={showError}
            message={t("all sub-products must have the same variations")}
            severity={"warning"} // Default severity is 'info'
            autoHideDuration={6000}
            onClose={handleCloseError}
          />
        </div>
      </div>
    </div>
  );
};

export default NewProductNormalSeller;
