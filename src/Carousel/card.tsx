import React from "react";
import { VisibilityContext } from "react-horizontal-scrolling-menu";

export function Card({ title, itemId, imgSrc }: { title: string; itemId: string; imgSrc: string }) {
  const visibility = React.useContext(VisibilityContext);
  const visible = visibility.isItemVisible(itemId);
  return (
    <div
      role="button"
      style={{
        border: "1px solid",
        display: "inline-block",
        margin: "0 10px",
        width: "400px",
        height: "400px",
        userSelect: "none",
        borderRadius: "15px",
      }}
      tabIndex={0}
      className="card"
    >
      <div style={{ 
                width: "400px", 
                height: "400px",
                backgroundImage:`url(${imgSrc})`,
                borderRadius: "15px",
                backgroundSize: "400px",
            }}
      >
      </div>

    </div>
  );
}
