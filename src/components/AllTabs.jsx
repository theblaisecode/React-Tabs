import SingleTab from "./SingleTab";

export default function AllTabs({ isTabs, toggleTabs }) {
  return (
    <div className="allTabs">
      {isTabs.map((item) => {
        return (
          <SingleTab
            key={item.id}
            {...item}
            toggleTabs={
              toggleTabs === item.order ? "singleTab activeTab" : "singleTab"
            }
          />
        );
      })}
    </div>
  );
}
