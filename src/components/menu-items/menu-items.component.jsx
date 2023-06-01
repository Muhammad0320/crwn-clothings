import React from "react";

import "./menu-items.style.scss";

import { useNavigate } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/${linkUrl}`);
  };

  return (
    <div className={`${size} menu-item `} onClick={handlerClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />

      <div className="content">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <span className="subtitle"> SHOP NOW </span>
      </div>
    </div>
  );
};

export default MenuItem;
