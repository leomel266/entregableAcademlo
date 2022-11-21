import React from "react";

const QuoteTex = ({ quoteRandom }) => {
  return (
    <div>
      <p className='card__quote'>{quoteRandom.quote}</p>
      <h3 className='card__author'>{quoteRandom.author}</h3>
    </div>
  );
};

export default QuoteTex;
