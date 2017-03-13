import React, { Component } from 'react';
import './App.css';

var RecipeList = React.createClass({
  getInitialState: function () {
    return {
      recipes: ["Oatmeal", "Dosa", "Pumpkin Pie"]
    }
  },
  render: function () {
    return (
      <div>
        <ul className="list-unstyled">
          {this.state.recipes.map(item => <li key={item}><Recipe item={item} /></li>)}
        </ul>
      </div>
    )
  }
});

var Recipe = React.createClass({
  render: function () {
    return (
      <div className="recipe well">{this.props.item}</div>
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
