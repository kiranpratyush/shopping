import React from "react";
import SHOP_DATA from "./CollectionData";
import CollectionItem from "../CollectioItems/CollectionItem";

class CollectionContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: SHOP_DATA,
    };
  }

  render() {
    return this.state.contents.map((elements) => {
      const { id, title, items } = elements;
      return (
        <div className="CollectionContainer" key={id}>
          <h1>{title.toUpperCase()}</h1>
          <CollectionItem items={items} />
        </div>
      );
    });
  }
}

export default CollectionContainer;
