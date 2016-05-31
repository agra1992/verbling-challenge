import React from 'react';

export default class ItemsInList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false	//Initially close up an item
		};
	}

	renderContentSection() {
		const { content, isExpanded } = this.props;		//Store content and isExpanded of each this.props.itemsList in const variables

		const listStyle = {
			cursor: 'pointer',
			width: '97%',
			whiteSpace: isExpanded ? '' : 'nowrap',			//Nowrap for collapsed items for Ellipses to work
			overflow: isExpanded ? '' : 'hidden',			//Display all text if item is expanded or hide overflow if an item is collapsed
			textOverflow: isExpanded ? '' : 'ellipsis',		//Add ellipses style for all collapsed items
			height: isExpanded ? 'auto' : 50	//Default to 50px height if item is collapsed
		}

		return (
			<li style={listStyle} onClick = {this.props.toggleContent.bind(this, content)}>
				{content}
			</li>
		);
	}



	render() {

		const divStyle = {
			margin: '0px auto'
		}
		
	    return (
	    	
		<div style={divStyle}>
			{ this.renderContentSection() }
		</div>
	    );
	}

}
