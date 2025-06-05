import { Link } from "react-router-dom";

const CreatorLink = ({ creatorId, username }) => {
  if (!creatorId) return null; // If sellerId is not present, return nothing

  return <Link to={`/employees/${creatorId}`}>{username}</Link>;
};

export default CreatorLink;
