import React from "react";
import BtnQuote from "./BtnQuote";
import "./QuoteBox.css";
import QuoteTex from "./QuoteTex";

const QuoteBox = ({ quoteRandom, handleClick, colorsRandom }) => {
  const objStyle = {
    color: colorsRandom,
  };

  const btnStyle = {
    backgroundColor: colorsRandom,
  };

  return (
    <article className='card' style={objStyle}>
      <i className='card__icon fa-solid fa-quote-left'></i>
      <QuoteTex quoteRandom={quoteRandom} />
      <BtnQuote handleClick={handleClick} btnStyle={btnStyle} />
    </article>
  );
};

export default QuoteBox;
