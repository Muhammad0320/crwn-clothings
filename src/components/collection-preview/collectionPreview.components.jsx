import React from "react";

import "./collectionPreview.style.scss";

import CollectionItems from "../collection-items/collection-items.components";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title"> {title} </h1>

      <div className="preview">
        {items
          .filter((_, index) => index < 4)
          .map(({ id, ...otherItemsProps }) => (
            <CollectionItems key={id} {...otherItemsProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
