import React from "react";
// import { useState } from "react";
import "./form.css";

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";


export default function Form(props) {  // КОМПОНЕНТ "Форма"
  
  const { labelSrc } = props;
  console.log(labelSrc);
  
  return (
    <form className="form">
      <img src={labelSrc} alt=""/>
      <input id = "srch" type="text" size="20" />
      <button className="st">Найти</button>
    </form>
  );
};


/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/