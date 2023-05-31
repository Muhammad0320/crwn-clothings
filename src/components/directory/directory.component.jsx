import React from "react";

import MenuItem from "../menu-items/menu-items.component";

import "./directory.style.scss";

class Direcotry extends React.Component {
  constructor() {
    super();

    this.state = {
      secitons: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
        },

        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 4,
        },

        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 5,
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.secitons.map(({ title, imageUrl, id, size }) => {
          return (
            <MenuItem
              title={title.toUpperCase()}
              imageUrl={imageUrl}
              key={id}
              size={size}
            />
          );
        })}
      </div>
    );
  }
}

export default Direcotry;
