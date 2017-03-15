import React from 'react';
import './App.css';
var RecipeList = require('./RecipeList.js');
var AddRecipeForm = require('./AddRecipeForm.js');

var App = React.createClass({
  getInitialState: function () {
    return {
      recipes: {
        "Oatmeal": "Water, Quacker Oats",
        "Dosa": "Batter, Oil",
        "Pumpkin Pie": "Pumpkin, Sugar, Yeast"
      }
    }
  },
  updateRecipeList: function (newItem, ingredients) {
    var newList = Object.assign({}, this.state.recipes);
    newList[newItem] = ingredients;
    this.setState({ recipes: newList });
  },
  deleteRecipe: function (recipe) {
    console.log("Delete " + recipe);
    var newList = Object.assign({}, this.state.recipes);
    delete newList[recipe];
    this.setState({ recipes: newList });
  },
  render: function () {
    return (
      <div className="container well">
        <RecipeList deleteRecipe={this.deleteRecipe} recipes={this.state.recipes} />
        <AddRecipeForm updateList={this.updateRecipeList} title="Add Recipe" />
      </div>
    );
  }
});


export default App;
