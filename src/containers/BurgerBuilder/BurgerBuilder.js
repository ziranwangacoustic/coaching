import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Aux from "../../hoc/Aux";

class BurgerBuilder extends Component {
  state = {
    burgerIngredients: {
      meat: 1,
      salad: 0,
      cheese: 1,
      bacon: 0,
    },
    burderBuild: ["Meat", "Cheese", "Salad", "Bacon"],
  };

  // addIngre = (ingre) => {
  //   const namedIngre = ingre.replace(" ", "-").toLowerCase();
  //   this.setState({
  //     burgerIngredients: [...this.state.burgerIngredients, namedIngre],
  //   });
  // };
  ingredientAdd = (ingre) => {
    const namedIngre = ingre.replace(" ", "-").toLowerCase();
    const controlledNo = this.state.burgerIngredients[namedIngre] + 1;
    this.setState({
      burgerIngredients: {
        ...this.state.burgerIngredients,
        [namedIngre]: controlledNo,
      },
    });
    console.log(this.state.burgerIngredients);
  };

  ingredientMinus = (ingre) => {
    const namedIngre = ingre.replace(" ", "-").toLowerCase();
    let controlledNo = this.state.burgerIngredients[namedIngre] - 1;
    if (controlledNo < 0) {
      // controlledNo = 0;
      return;
    }
    this.setState({
      burgerIngredients: {
        ...this.state.burgerIngredients,
        [namedIngre]: controlledNo,
      },
    });
    console.log(this.state.burgerIngredients);
  };
  render() {
    return (
      <Aux>
        huifuiy
        <Burger ingredients={this.state.burgerIngredients} />
        <BuildControls
          burderBuild={this.state.burderBuild}
          ingredientAdd={this.ingredientAdd}
          ingredientMinus={this.ingredientMinus}
        />
        {/*
        <div>
          Build Controls
          <div>
            Add Bread Top
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "bread-top"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
          <div>
            Add Meat
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "meat"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
          <div>
            Add Salad
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "salad"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
          <div>
            Add Cheese
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "cheese"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
          <div>
            Add Bacon
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "bacon"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
          <div>
            Add Bread Bottom
            <button
              onClick={() => {
                this.setState({
                  burgerIngredients: [...this.state.burgerIngredients].push(
                    "bread-bottom"
                  ),
                });
              }}
            >
              +
            </button>
            <button>-</button>
          </div>
        </div> */}
      </Aux>
    );
  }
}

export default BurgerBuilder;
