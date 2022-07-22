import React from "react";
// import { useState } from "react";
import "./contentBox.css";

// import PropTypes from "prop-types";
// import UserModel from "../models/UserModel";


export default function ContentBox(props) {  // КОМПОНЕНТ "Контент"
  
  const { contentBox } = props;
  const { title, contentNews, src } = contentBox;
 
  function ListContentNews(itemOfContentNews, index) { // функция отрисовки элемента контента

    return (
        <div key={index} >
            <li><a href={src}>{itemOfContentNews}</a></li>
        </div>
    )
  };  

      
  return (
    <div className="contentWidget"> {title}
      <div className="politicNews">
        {contentNews.map((itemOfContentNews, index) => ListContentNews(itemOfContentNews, index))}
      </div>
    </div>
  );
};


/*
ShopItemFunc.propTypes = {
  itemArray: PropTypes.arrayOf(UserModel).isRequired
}
*/