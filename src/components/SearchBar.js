import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {
	handleSearchTerm = event => {
		this.props.handleSearchTerm(event.target.value);
	};

	render() {
		return (
			<div className="search-bar__container hide-on-phone">
				<input
					className="search-bar__input"
					placeholder={`filter list by name/symbol`}
					value={this.props.searchTerm}
					onChange={this.handleSearchTerm}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	searchTerm: PropTypes.string,
	handleSearchTerm: PropTypes.func
};

export default SearchBar;
