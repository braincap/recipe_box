var React = require('react');
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var EditRecipeForm = require('./EditRecipeForm');
var $ = require('jquery');

var Recipe = React.createClass({
    handleClick: function (e) {
        $('.panel-body').not($(e.currentTarget).next()).slideUp(200);
        $(e.currentTarget).next().slideToggle(200);
    },
    handleDeleteItem: function () {
        this.props.deleteRecipe(this.props.item);
    },
    editRecipe: function (newName, newIngredients) {
        this.props.editRecipe(this.props.item, newName, newIngredients)
    },
    render: function () {
        return (
            <div className="recipe panel panel-success">
                <div className="panel-heading" onClick={this.handleClick}>{this.props.item}</div>
                <div className="panel-body">
                    <ListGroup>{this.props.ingredients.split(',').map(material => <ListGroupItem key={this.props.item + ":" + material}>{material}</ListGroupItem>)}</ListGroup>
                    <ButtonToolbar>
                        <Button bsStyle="danger" onClick={this.handleDeleteItem}>Delete</Button>
                        <EditRecipeForm editRecipe={this.editRecipe} recipe={this.props.item} ingredients={this.props.ingredients} />
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
});

module.exports = Recipe;