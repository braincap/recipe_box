var React = require('react');
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;

var EditRecipeForm = React.createClass({
    getInitialState() {
        return { showModal: false };
    },
    close() {
        this.setState({ showModal: false });
    },
    open() {
        this.setState({ showModal: true });
    },
    handleSubmit(e) {
        e.preventDefault();
        this.props.editRecipe(this.refs.refRecipeName.value, this.refs.ingredientsName.value);
        this.close();
    },
    render: function () {
        return (
            <div>
                <Button style={{ "marginLeft": "5px" }} bsStyle="default" onClick={this.open}>Edit</Button>
                <Modal show={this.state.showModal} onHide={this.close}>
                    <form onSubmit={this.handleSubmit}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Recipe</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="form-group">
                                <label htmlFor="recipeInput">Recipe Name</label>
                                <input type="text" className="form-control" id="recipeInput" ref="refRecipeName" defaultValue={this.props.recipe} />
                                <label htmlFor="ingredientsInput">Ingredients</label>
                                <textarea className="form-control" rows="3" id="ingredientsInput" ref="ingredientsName" defaultValue={this.props.ingredients} />
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button type="submit" bsStyle="primary">Save</Button>
                            <Button onClick={this.close}>Close</Button>
                        </Modal.Footer>
                    </form>
                </Modal>
            </div>
        )
    }
});

module.exports = EditRecipeForm;