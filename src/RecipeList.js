var React = require('react');
var Recipe = require('./Recipe.js');

var RecipeList = React.createClass({
    recipeElementArray: function () {
        return Object.keys(this.props.recipes).map((recipe) =>
            <Recipe
                deleteRecipe={this.props.deleteRecipe}
                editRecipe={this.props.editRecipe}
                key={recipe}
                item={recipe}
                ingredients={this.props.recipes[recipe]}
            />);
    },
    render: function () {
        console.log(this.recipeElementArray());
        return (
            <div className="recipe-list">
                {this.recipeElementArray()}
            </div>
        )
    }
});

module.exports = RecipeList;