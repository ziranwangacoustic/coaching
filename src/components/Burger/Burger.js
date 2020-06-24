import React from "react";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = ({ ingredients }) => {
  // console.log("ingredients", ingredients);
  let transformedIngredients = Object.keys(ingredients)
    .map((igKey) =>
      [...Array(ingredients[igKey])].map((_, i) => (
        <BurgerIngredient key={igKey + i} type={igKey} />
      ))
    )
    .reduce((acc, el) => [...acc, ...el]);
  // .reduce((acc, el) => arr.concat(el), []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredient</p>;
  }

  console.log(transformedIngredients);

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      {/* beneath three examples having same rendering logic */}
      {/* {[
        [<div>cheese1</div>, <div>cheese2</div>],
        [<div>meat</div>],
        [<div>bacon1</div>, <div>bacon2</div>],
      ]} */}
      {/* {[
        <div>cheese1</div>,
        <div>cheese2</div>,
        <div>meat</div>,
        <div>bacon1</div>,
        <div>bacon2</div>,
      ]} */}
      {/* {[['cheese1', 'cheese2'], ["meat"], ["bacon1", "bacon2"]]} */}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
