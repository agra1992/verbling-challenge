import React from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class CreateListItem extends React.Component {

	/*handleInputChange(e) {
		this.setState({input: e.target.value});
	}*/

	render() {
		//console.log(this.props.itemsList);

		return (
			<form id='createForm' onSubmit={this.handleCreate.bind(this)}>
                <input id="createNewItem" type="text" placeholder="Please enter a new item for the list..." ref="createInput" />
                <button>Add</button>
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();
        //console.log(this.refs.createInput.value);
        //console.log(this.props.createItem);

        if(this.refs.createInput.value != '') {
        	this.props.createItem(this.refs.createInput.value);
        }
        else {
        	alert('Please input some value');
        }

        this.refs.createInput.value = '';
    }
}