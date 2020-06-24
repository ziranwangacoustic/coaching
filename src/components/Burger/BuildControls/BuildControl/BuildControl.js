import React from "react";

const BuildControl = ({ burderIng, IngrePlus, IngreMinus }) => {
  return burderIng.map((i) => (
    <div key={i}>
      {i}
      <button
        onClick={() => {
          IngrePlus(i);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          IngreMinus(i);
        }}
      >
        -
      </button>
    </div>
  ));
};

export default BuildControl;
