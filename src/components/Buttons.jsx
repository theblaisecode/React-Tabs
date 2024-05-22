// import React from "react";

export default function Button({ isTabs, changeTab, toggleTabs }) {
  const getMarkerPosition = (index) => {
    const reversedIndex = isTabs.length - index - 1;
    return `translateY(${reversedIndex * 8.5}%)`;
  };

  return (
    <div className="buttons">
      {isTabs.map((item, index) => (
        <button
          className={toggleTabs === item.order ? "btn activeBtn" : "btn"}
          key={item.id}
          onClick={() => changeTab(item.order)}>
          {item.company}
        </button>
      ))}

      <div
        className="marker"
        style={{ transform: getMarkerPosition(toggleTabs - 1) }}>
        <div id="top"></div>
        <div id="bottom"></div>
      </div>
    </div>
  );
}

// isTabs.map maps over the api data
// item.order is a key/value pair gotten from the api data
// changeTab is a click event funtion that sets the toggleTab to match the item order.
