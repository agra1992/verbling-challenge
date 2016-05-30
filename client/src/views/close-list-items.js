import React from 'react';

export default class CloseAllListItems extends React.Component {

	render() {
		//console.log(this.props.itemsList);

		return (
			<form onSubmit={this.handleClose.bind(this)}>
                <button>Close All</button>
            </form>
        );
    }

    handleClose(event) {
        event.preventDefault();
        
		console.log(this.props.closeItems);

		this.props.closeItems(true);
		/*_.forEach(this.props.itemsList, function(val) {
			if(val.isExpanded === 'true') {
				val.isExpanded = 'false';
			}
			else {
				val.isExpanded = 'true';
			}
		});

		this.props.toggleItems(this.props.itemsList);*/
    }
}