import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const BuildControls = ({ burderBuild, ingredientAdd, ingredientMinus }) => {
  return (
    <div className={classes.BuildControls}>
      <BuildControl
        burderIng={burderBuild}
        IngrePlus={ingredientAdd}
        IngreMinus={ingredientMinus}
      />
    </div>
  );
};

export default BuildControls;
