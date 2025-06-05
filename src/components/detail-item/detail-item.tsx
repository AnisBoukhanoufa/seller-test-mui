import "./detail-item.scss";
const DetailItem = ({ label, value }) => {
  return (
    <div className="detailItem">
      <span className="itemKey">{label} :</span>
      <span className="valueKey">{value}</span>
    </div>
  );
};

export default DetailItem;
