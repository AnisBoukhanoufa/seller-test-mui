import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./image-gallery.scss";
const ImagesGallery = ({ images }) => {
  const imagesToUse =
    images
      ?.filter((image) => !image?.startsWith("NOT_FOUND"))
      ?.map((image) => ({
        original: image,
        thumbnail: image,
      })) || [];


  return (
    <div style={{ maxWidth: "32em" }}>
        <ImageGallery
          thumbnailPosition={"left"}
          items={imagesToUse}
          showFullscreenButton={false}
          showPlayButton={false}
        />
    </div>
  );
};

export default ImagesGallery;
