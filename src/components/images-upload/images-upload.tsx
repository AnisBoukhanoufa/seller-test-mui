import "./images-upload.scss"; // Assume you have some CSS for styling
import { t } from "i18next";

const ImageUploader = ({ files, handleFileUpload, handleDelete }) => {
  return (
    <div className="products-images capitalize">
      <h3> {t("images")}</h3>
      <div className="uploadArea">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          accept=".jpg,.jpeg,.png"
        />
        <h4>
          drag & drop or <span>choose file</span> to upload
        </h4>
        <h5>PNG or JPG, JPEG</h5>
      </div>
      {files.length == 0 && (
        <p className="uploadMessage">Please upload some images</p>
      )}
      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name}
            <div className="deleteButton" onClick={() => handleDelete(index)}>
              X
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageUploader;
