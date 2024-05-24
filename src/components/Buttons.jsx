export default function Button({ isTabs, changeTab, toggleTabs }) {
  const getMarkerPosition = (index) => {
    const isSmallScreen = window.matchMedia(
      "(max-width: 599px), (max-height: 599px)"
    ).matches;
    const reversedIndex = isTabs.length - index - 1;

    if (isSmallScreen) {
      return `translateX(${reversedIndex * 18}%)`;
    } else {
      return `translateY(${reversedIndex * 8.3}%)`;
    }
  };

  return (
    <div className="buttons">
      {isTabs.map((item) => (
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
