import React from "react";

import SHOP_DATA from "./shopData";

import CollectionPreview from "../../components/collection-preview/collectionPreview.components";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      components: SHOP_DATA,
    };
  }

  render() {
    const { components } = this.state;

    return (
      <div className="shop-page">
        {components.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
