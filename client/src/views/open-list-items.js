import React from 'react';

export default class OpenAllListItems extends React.Component {

	render() {
		//console.log(this.props.itemsList);

		return (
			<form onSubmit={this.handleOpen.bind(this)}>
                <button>Open All</button>
            </form>
        );
    }

    handleOpen(event) {
        event.preventDefault();
        
		console.log(this.props.openItems);

		this.props.openItems(true);
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