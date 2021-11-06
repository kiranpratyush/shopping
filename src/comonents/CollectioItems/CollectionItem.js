import React from "react";

function CollectionItem({ items }) {
  return items
    .filter((_, index) => {
      return index < 4;
    })
    .map((element) => {
      return (
        <div className="CollectionItem" key={element.id}>
          {element.name}
        </div>
      );
    });
}

export default CollectionItem;
