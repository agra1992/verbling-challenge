import React from 'react';

export default class ItemsInList extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			isExpanded: false
		};
	}

	renderContentSection() {
		const { content, isExpanded } = this.props;

		const contentStyle = {
			cursor: 'pointer',
			width: 350,
			whiteSpace: isExpanded ? '' : 'nowrap',
			overflow: isExpanded ? '' : 'hidden',
			textOverflow: isExpanded ? '' : 'ellipsis'
		}

		return (
			<h5 style={contentStyle} onClick = {this.props.toggleContent.bind(this, content)}>
				{content}
			</h5>
		);
	}



	render() {
		//console.log(this.props.isExpanded);

		const listStyle = {
			height: this.props.isExpanded ? 'auto' : 50,
			transition: 'height 0.5s',
			WebkitTransition: 'height 0.5s'
		}

	    return (
    		<li style={listStyle}>
                {this.renderContentSection()}
            </li>
	    );
	}

}