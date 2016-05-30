import React from 'react';
import { FormGroup, InputGroup, FormControl, Button } from 'react-bootstrap';

export default class SearchAllItems extends React.Component {

  /*handleInputChange(e) {
    this.setState({input: e.target.value});
  }*/

  render() {
  //console.log(this.props.itemsList);

  return (
      <form id="searchForm" onChange={this.handleSearch.bind(this)}>
        <input id="searchNewItem" type="text" placeholder="Search for items in list..." ref="searchInput" />
      </form>
    );
  }

  handleSearch(event) {
    event.preventDefault();
    this.props.searchItems(this.refs.searchInput.value, this.props.itemsListBackup);
  }
}