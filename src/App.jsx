import data from "./json/quotes.json";
import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import colors from "./json/colors.json";

function App() {
  const getRandomFromArray = (arr) => {
    const indexRandom = Math.floor(arr.length * Math.random());
    return arr[indexRandom];
  };

  const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(data));
  const [colorsRandom, setColorsRandom] = useState(getRandomFromArray(colors));

  const handleClick = () => {
    setQuoteRandom(getRandomFromArray(data));
    setColorsRandom(getRandomFromArray(colors));
  };

  const objStyle = {
    backgroundColor: colorsRandom,
  };

  return (
    <div className='App' style={objStyle}>
      <QuoteBox
        quoteRandom={quoteRandom}
        handleClick={handleClick}
        colorsRandom={colorsRandom}
      />
    </div>
  );
}

export default App;
