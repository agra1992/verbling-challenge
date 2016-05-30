import _ from 'lodash';
import React from 'react';
import ItemsListHeader from './items-list-header';
import ItemsInList from './items-list-items';

export default class AllItemsList extends React.Component {

	renderItems() {

		const props = _.omit(this.props, 'itemsList');

		return _.map(this.props.itemsList, (listItems, index) => <ItemsInList key={index} {...listItems} {...props} />);
	}

	render() {
		//console.log(this.props.itemsList);

		return (
			<nav>
		    	<ul id="contentsContainer">
	    			{this.renderItems()}
		    	</ul>
	    	</nav>
	    );
	}
}