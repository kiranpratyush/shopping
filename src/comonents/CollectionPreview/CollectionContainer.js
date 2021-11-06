import React from "react";
import SHOP_DATA from "./CollectionData";
import CollectionItem from "../CollectioItems/CollectionItem";
import "./CollectionContainer.css"
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
        <div  key={id}>
          <h1>{title.toUpperCase()}</h1>
          <div className="CollectionContainer">
          <CollectionItem className ="CollectionContainer" items={items} />
          </div>
        </div>
      );
    });
  }
}

export default CollectionContainer;
