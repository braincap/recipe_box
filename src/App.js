import React, { Component } from 'react';
import './App.css';
var $ = require('jquery');

var RecipeList = React.createClass({
  getInitialState: function () {
    return {
      recipes: ["Oatmeal", "Dosa", "Pumpkin Pie"]
    }
  },
  render: function () {
    return (
      <div className="recipe-list">
        {this.state.recipes.map(item => <Recipe key={item} item={item} />)}
      </div>
    )
  }
});

var Recipe = React.createClass({
  handleClick: function (e) {
    $('.panel-body').not($(e.currentTarget).next()).slideUp(200);
    $(e.currentTarget).next().slideToggle(200);
  },
  render: function () {
    return (
      <div className="recipe panel panel-success">
        <div className="panel-heading" onClick={this.handleClick}>{this.props.item}</div>
        <div className="panel-body">This is the recipe of {this.props.item}</div>
      </div>
    )
  }
})

class App extends Component {
  render() {
    return (
      <div className="container well">
        <RecipeList />
        <button className="btn btn-primary">Add Recipe</button>
      </div>
    );
  }
};

export default App;
