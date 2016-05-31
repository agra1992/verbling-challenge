import React from 'react';

export default class CreateListItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null   //Initially there will be no error
        };
    }

    renderError() {     //Function to render error

        if(!this.state.error) { return null };

        return <div id='errorMessage'> { this.state.error } </div>
    }

	render() {
        var blnError = false;

		return (
			<form id='createForm' onSubmit={this.handleCreate.bind(this)}>
                { this.renderError() }
                <input id="createNewItem" type="text" placeholder="Please enter a new item for the list..." ref="createInput" />
                <button>Add</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();     //To prevent page refresh

        const createInput = this.refs.createInput;
        const item = createInput.value;
        const validateInput = this.validateInput(item);     //Validate whether input entered is empty

        if(validateInput) {     //If an error message was returned
            this.setState({ error: validateInput });    //Update state of error to current error message
        }
        else {      //if no error was returned
            this.setState({ error: null });     //Remove error message
            this.props.createItem(item);    //Send entered contents to the parent function
            this.refs.createInput.value = '';   //To empty the input field off all contents after add button is clicked
        }
    }

    validateInput(item) {
        if(!item) {     //If input is empty
            return "Please enter some value";
        }
        else {
            return null;
        }
    }
}
