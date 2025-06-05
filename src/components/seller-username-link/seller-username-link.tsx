import { Link } from "react-router-dom";
// import './SellerLink.css'; // Optional if you want to use a CSS file for styling

const SellerLink = ({ sellerId, username }) => {
  if (!sellerId) return null; // If sellerId is not present, return nothing

  return <Link to={`/sellers/${sellerId}`}>{username}</Link>;
};

export default SellerLink;
