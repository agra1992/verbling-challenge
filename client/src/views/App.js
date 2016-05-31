import React from 'react';
import AllItemsList from './items-list';
import CreateListItem from './create-list-item';
import OpenAllListItems from './open-list-items';
import CloseAllListItems from './close-list-items';
import ToggleAllListItems from './toggle-list-items';
import SearchAllItems from './search-items';

//Default values to load on page refresh
//content attribute stores the actual content
//isExpanded attribute stores whether the list item is expanded or collapsed

const itemsList = [
{
	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
	isExpanded: false
},
{
	content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
	isExpanded: false
},
{
	content: 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?',
	isExpanded: false
},
{
	content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
	isExpanded: false
}
];

//To store values of itemsList without state
var itemsListBackup = [];

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			itemsList,
			itemsListBackup: itemsList
		};
	}

	render() {

		return (	//Render all components
			<div>
				<h1 id="app-title">Verbling Challenge</h1>
				<SearchAllItems searchItems = {this.searchItems.bind(this)} itemsListBackup={this.state.itemsListBackup}/>
				<AllItemsList
					itemsList={this.state.itemsList}
					toggleContent = {this.toggleContent.bind(this)}
				/>
				<ul id="buttonsList">
					<li><CreateListItem createItem = {this.createItem.bind(this)} /></li>
					<li><OpenAllListItems openItems = {this.openItems.bind(this)} /></li>
					<li><CloseAllListItems closeItems = {this.closeItems.bind(this)} /></li>
					<li><ToggleAllListItems toggleItems = {this.toggleItems.bind(this)} /></li>
				</ul>
			</div>
		);
	}

	createItem(content) {	//Function to create new item
		this.state.itemsList.unshift({	//To add new item at the top of an array
			content,
			isExpanded: false	//Initially the list will be deflated
		});
		this.setState({ itemsList: this.state.itemsList });	//Update itemsList with the new item
		itemsListBackup = itemsList;	//Create a backup list with all new and default values
	}

	toggleContent(content) {	//Function to inflate or deflate a particular list item
		const foundItem = _.find(this.state.itemsList, item => item.content === content);	//Get the content of the item being clicked and match it with all the contents to find the correct list item 
		foundItem.isExpanded = ! foundItem.isExpanded;	//Toggle isExpanded property accordingly
		this.setState({ itemsList: this.state.itemsList });	//Update the itemsList
	}

	toggleItems(content) {	//Function to inflate or deflate all list items

		if(content) {
			_.each(this.state.itemsList, function(item) {	//Retrieve all items and toggle isExpanded value for each item
				item.isExpanded = !item.isExpanded;
			});
		}
		this.setState({ itemsList: this.state.itemsList });
	}

	openItems(content) {	//Function to expand all list items

		if(content) {
			_.each(this.state.itemsList, function(item) {	//Get all list items and set isExpanded to true for all
				item.isExpanded = true;
			});
		}
		this.setState({ itemsList: this.state.itemsList });
	}

	closeItems(content) {	//Function to close all list items

		if(content) {
			_.each(this.state.itemsList, function(item) {	//Get all list items and set isExpanded to false for all
				item.isExpanded = false;
			});
		}
		this.setState({ itemsList: this.state.itemsList });
	}

	searchItems(content, backupVals) {	//Function to search for items. Parameters: content is the string to be searched and backupVals contains all the list items (without state updates)

		var data = backupVals;
		
		if(content.length > 0){		//If content is entered by user
			content = content.trim().toLowerCase();

            data = _.filter(data, function(l){		//Filter results based on search string
                return l.content.toLowerCase().match( content );
            });

            this.setState({ itemsList: data });		//Update the state of itemsList with the filtered array
        }
        if(content.length === 0) {	//If user deletes his search string or has not entered anything, display all items
        	this.setState({ itemsList: backupVals });
        }
	}
}