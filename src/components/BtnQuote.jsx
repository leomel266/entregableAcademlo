import React from "react";

const BtnQuote = ({ handleClick, btnStyle }) => {
  return (
    <button className='card__btn' style={btnStyle} onClick={handleClick}>
      &gt;
    </button>
  );
};

export default BtnQuote;
