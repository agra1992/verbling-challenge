import React from 'react';

export default class CloseAllListItems extends React.Component {

	render() {
		
		return (
			<form onSubmit={this.handleClose.bind(this)}>
                <button>Close All</button>
            </form>
        );
    }

    handleClose(event) {
        event.preventDefault();		//To prevent page refresh

		this.props.closeItems(true);	//Send close all true flag to parent function
    }
}