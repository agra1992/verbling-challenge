import React from 'react';

export default class ToggleAllListItems extends React.Component {

	render() {
		
		return (
			<form onSubmit={this.handleToggle.bind(this)}>
                <button>Toggle All</button>
            </form>
        );
    }

    handleToggle(event) {
        event.preventDefault();		//To prevent page refresh

		this.props.toggleItems(true);	//Send true toggle flag to parent function
    }
}