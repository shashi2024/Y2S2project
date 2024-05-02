import React from "react";

function TabBar({ tabs, activeTab, onTabClick }) {
  const tabWidth = "150px";
  const borderColor = "#FF6B6B";

  return (
    <div className="bg-color2 rounded-md flex items-stretch">
      {tabs.map((tab, index) => (
        <div
          key={index}
          onClick={() => onTabClick(tab)}
          className={`cursor-pointer px-2 flex items-center justify-center ${
            activeTab === tab
              ? "text-white bg-button_color pt-2 pb-2 rounded-md font-bold"
              : "text-black font-semibold"
          }`}
          style={{ minWidth: tabWidth, position: "relative" }}
        >
          {tab}
          {index !== tabs.length - 1 && (
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "25%",
                bottom: "25%",
                borderRight: `1px solid ${borderColor}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default TabBar;
