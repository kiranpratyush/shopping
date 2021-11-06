import React from "react";
import "./CollectionItem.css"
function CollectionItem({ items }) {
  return items
    .filter((_, index) => {
      return index < 4;
    })
    .map((element) => {
      return (
        <div className="CollectionItem" key={element.id}>
          <div className ="Image" style ={{backgroundImage:`url(${element.imageUrl})`}}></div>
          <div className="ItemName">{element.name}</div>
          <div className="ItemPrice">{element.price}</div>
        </div>
      );
    });
}

export default CollectionItem;
