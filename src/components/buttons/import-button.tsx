import React from "react";
import { t } from "i18next";

interface ImportButtonProps {
  label: string;
  handleExcelUpload: any;
}

const ImportButton: React.FC<ImportButtonProps> = ({
  label,
  handleExcelUpload,
}) => {
  return (
    <div className="importFile  xls-button ">
      <span style={{ textAlign: "center" }}>{t(label)}</span>
      <input type="file" accept="xlsx,xls" onChange={handleExcelUpload} />
    </div>
  );
};

export default ImportButton;
