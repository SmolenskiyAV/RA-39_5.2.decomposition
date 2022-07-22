import React from "react";
// import { useState } from "react";
import "./weather.css";

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";


export default function Weather(props) {  // КОМПОНЕНТ "Погода"
  
  const { weather } = props;
  const { svg, temperatureNow, temperatureMorning, temperatureEvening } = weather;
    
  return (
    <div className="weatherWidget">Погода
      <img src={svg} alt=""/>
      <div className="nowTemperature">{temperatureNow}&#176;</div>
      <div className="otherTemperature">
        <span>Утром{temperatureMorning}</span>
        <span>Вечером{temperatureEvening}</span>
      </div>
    </div>
  );
};


/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/