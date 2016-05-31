import React from 'react';

export default class CreateListItem extends React.Component {

	render() {

		return (
			<form id='createForm' onSubmit={this.handleCreate.bind(this)}>
                <input id="createNewItem" type="text" placeholder="Please enter a new item for the list..." ref="createInput" />
                <button>Add</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();     //To prevent page refresh

        if(this.refs.createInput.value != '') {
        	this.props.createItem(this.refs.createInput.value);    //Send entered contents to the parent function
        }
        else {      //Handle empty inserts
        	alert('Please input some value');
        }

        this.refs.createInput.value = '';   //To empty the input field of all contents after add is clicked
    }
}