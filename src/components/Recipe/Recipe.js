import React from "react";

const Recipe = props => {
  return (
    <div>
      <h3>{props.data.name}</h3>
      <div className="button-secondary">Add Item</div>
    </div>
  );
};

export default Recipe;
