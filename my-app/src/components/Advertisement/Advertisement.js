import React from "react";
// import { useState } from "react";
import "./advertisement.css";

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";


export default function Advertisement(props) {  // КОМПОНЕНТ "Баннер с рекламой"
  
  const { content } = props;
  const { svg, title, text, src } = content;
        
  return (
    <div className="bannerAdvertisement">
      <img src={svg} alt=""/>
      <h4>{title}</h4>
      <div><a href={src}>{text}</a></div>
    </div>
  );
};


/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/