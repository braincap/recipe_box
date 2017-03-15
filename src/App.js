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
  componentDidUpdate: function () {
    if (typeof (Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.
      localStorage.setItem("recipesStorage", JSON.stringify(this.state.recipes));
    } else {
      alert("Sorry! No Web Storage support");
    }
  },
  componentWillMount: function () {
    if (typeof (Storage) !== "undefined") {
      // Code for localStorage/sessionStorage.

      var newList = JSON.parse(localStorage.getItem("recipesStorage"));
      if (localStorage.getItem("recipesStorage") !== null && Object.keys(newList).length !== 0) {
        this.setState({
          recipes: newList
        });
      }
    } else {
      alert("Sorry! No Web Storage support");
    }
  },
  updateRecipeList: function (newItem, ingredients) {
    var newList = Object.assign({}, this.state.recipes);
    newList[newItem] = ingredients;
    this.setState({ recipes: newList });
  },
  deleteRecipe: function (recipe) {
    var newList = Object.assign({}, this.state.recipes);
    delete newList[recipe];
    this.setState({ recipes: newList });
  },
  editRecipe: function (oldName, newName, newIngredients) {
    var newList = Object.assign({}, this.state.recipes);
    if (newName !== oldName) {
      delete newList[oldName];
    }
    newList[newName] = newIngredients;
    this.setState({
      recipes: newList
    });
  },
  render: function () {
    return (
      <div className="container well">
        <RecipeList deleteRecipe={this.deleteRecipe} editRecipe={this.editRecipe} recipes={this.state.recipes} />
        <AddRecipeForm updateList={this.updateRecipeList} />
      </div>
    );
  }
});


export default App;
