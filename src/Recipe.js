var React = require('react');
var Button = require('react-bootstrap').Button;
var ButtonToolbar = require('react-bootstrap').ButtonToolbar;
var ListGroup = require('react-bootstrap').ListGroup;
var ListGroupItem = require('react-bootstrap').ListGroupItem;
var $ = require('jquery');

var Recipe = React.createClass({
    handleClick: function (e) {
        $('.panel-body').not($(e.currentTarget).next()).slideUp(200);
        $(e.currentTarget).next().slideToggle(200);
    },
    handleDeleteItem: function () {
        console.log("Recipe delete : " + this.props.item);
        this.props.deleteRecipe(this.props.item);
    },
    render: function () {
        return (
            <div className="recipe panel panel-success">
                <div className="panel-heading" onClick={this.handleClick}>{this.props.item}</div>
                <div className="panel-body">
                    <ListGroup>{this.props.ingredients.split(',').map(material => <ListGroupItem key={this.props.item + ":" + material}>{material}</ListGroupItem>)}</ListGroup>
                    <ButtonToolbar>
                        <Button bsStyle="danger" onClick={this.handleDeleteItem}>Delete</Button>
                        <Button>Edit</Button>
                    </ButtonToolbar>
                </div>
            </div>
        )
    }
});

module.exports = Recipe;