import React from "react";

export const csvToList = (csvStr, listType) => {
  if (listType === "ul") {
    return (
      <ul>
        {csvStr.split("\n").map((entry, idx) => (
          <li className="recipe-list-ingredients" key={idx}>
            {entry}
          </li>
        ))}
      </ul>
    );
  } else {
    return (
      <ol>
        {csvStr.split("\n").map((entry, idx) => (
          <li className="recipe-list-directions" key={idx}>
            {entry}
          </li>
        ))}
      </ol>
    );
  }
};
