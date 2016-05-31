import React from 'react';

export default class SearchAllItems extends React.Component {

  render() {

  return (
      <form id="searchForm" onChange={this.handleSearch.bind(this)}>
        <input id="searchNewItem" type="text" placeholder="Search for items in list..." ref="searchInput" />
      </form>
    );
  }

  handleSearch(event) {
    event.preventDefault();   //To prevent page refresh
    this.props.searchItems(this.refs.searchInput.value, this.props.itemsListBackup);    //Send the inputted search string and all items in list to parent function
  }
}