import "./sourcing-product-card.scss";
import StatusCell from "components/status-cell";
import ColorDot from "components/color-dot";


const DetailCard = ({ isSelected, onSelect, cardDetail }) => {
  return (
    <div
    onClick={onSelect}
    className={`sourcing-product ${isSelected ? "selected" : ""}`}
  >
    <div className="product-details">
      <p className="product-name">
        {cardDetail?.productId?.productId?.name}
      {cardDetail?.productId?.variations && (
        <>
          {Object.entries(cardDetail?.productId?.variations).map(
            ([key, value]) => (
              <>{value} </>
            )
          )}
          {cardDetail?.productId?.variations?.color && (
            <ColorDot color={cardDetail?.productId?.variations?.color} />
          )}
        </>
      )}
      </p>
    </div>
    <StatusCell status={cardDetail?.currentStatus} />
  </div>
  );
};

const SubProductsCards = ({
  subProducts,
  setSelectedCardId,
  selectedCardId,
}) => {
  const handleSelect = (id) => {
    setSelectedCardId(id);
  };

  return (
    <>
      {subProducts?.map((card, index) => {
        return (
          <DetailCard
            key={index}
            isSelected={selectedCardId === card._id}
            cardDetail={card}
            onSelect={() => handleSelect(card._id)}
          />
        );
      })}
    </>
  );
};

export default SubProductsCards;
