import React from "react";
// import { useState } from "react";
import "./news.css";

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";


export default function News(props) {  // КОМПОНЕНТ "Новости"
  
  const { politicNews, currencyExchangeNews } = props;
  const date = new Date();
  const currentDate = date.getDate(date) + '.' + date.getMonth(date) + '.' + date.getFullYear() + '   ' + date.getHours() + ':' + date.getMinutes();

  function ListPoliticNews(itemOfPoliticNews) { // функция отрисовки элемента политических новостей

    const { id, svg, text, src } = itemOfPoliticNews;
        
    return (
        <div key={id} id={id}>
            <img src={svg} alt=""/>
            <li><a href={src}>{text}</a></li>
        </div>
    )
  };  

  function ListCurrencyNews(itemOfCurrencyNews) { // функция отрисовки элемента "курс валюты"

    const { id, currencyName, currencyValue } = itemOfCurrencyNews;
        
    return (
        <div key={id} id={id}>
            1{currencyName}={currencyValue}
        </div>
    )
  };   
    
  return (
    <div className="newsWidget"> Сейчас в СМИ {currentDate}
      <div className="politicNews">
        {politicNews.map((itemOfPoliticNews) => ListPoliticNews(itemOfPoliticNews))}
      </div>
      <div className="currencyExchangeNews">
        {currencyExchangeNews.map((itemOfCurrencyNews) => ListCurrencyNews(itemOfCurrencyNews))}
      </div>
    </div>
  );
};


/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/