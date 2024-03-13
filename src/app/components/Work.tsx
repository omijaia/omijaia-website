import React, { useState } from "react";
import { WorkData } from "./types";

const Work: React.FC<WorkData> = ({
  title,
  description,
  category,
  technologies,
  url,
  imageUrl,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="work" style={{ background: "#201E1b", borderRadius: "10px" }} onClick={toggleDetails}>
      <h2>{title}</h2>
      {showDetails && (
        <>
          <img src={imageUrl} alt={title} />
          <p>{description}</p>
          <br/>
          <span className="category-label">{category.join(", ")}</span>          
          <p><b>Tech:</b> {technologies.join(", ")}</p>
          <p>
          <a href={url}>{url}</a>
          </p>
        </>
      )}
    </div>
  );
};

export default Work;
