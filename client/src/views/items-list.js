import _ from 'lodash';
import React from 'react';
import ItemsInList from './items-list-items';

export default class AllItemsList extends React.Component {

	renderItems() {

		const props = _.omit(this.props, 'itemsList');		//Don't need the itemsList prop so omitting it

		return _.map(this.props.itemsList, (listItems, index) => <ItemsInList key={index} {...listItems} {...props} />);
	}

	render() {

		return (
			<nav>
		    	<ul id="contentsContainer">
	    			{this.renderItems()}
		    	</ul>
	    	</nav>
	    );
	}
}