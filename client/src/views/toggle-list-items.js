import React from 'react';

export default class ToggleAllListItems extends React.Component {

	render() {
		//console.log(this.props.itemsList);

		return (
			<form onSubmit={this.handleToggle.bind(this)}>
                <button>Toggle All</button>
            </form>
        );
    }

    handleToggle(event) {
        event.preventDefault();
        
		console.log(this.props.toggleItems);

		this.props.toggleItems(true);
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