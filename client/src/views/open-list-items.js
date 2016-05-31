import React from 'react';

export default class OpenAllListItems extends React.Component {

	render() {

		return (
			<form onSubmit={this.handleOpen.bind(this)}>
                <button>Open All</button>
            </form>
        );
    }

    handleOpen(event) {
        event.preventDefault();		//To prevent page refresh
        
		this.props.openItems(true);		//Send true flag to parent function that Open All button has been clicked
    }
}