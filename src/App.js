import React, { Component } from 'react';
import BurgerMenu from './components/BurgerMenu';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';
import CryptoNews from './components/CryptoNews';
import CryptoChart from './components/CryptoChart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		// if user visits 'cryptoNews' or 'cryptoChart' pages the default chosen crypto asset is Bitcoin
		this.state = {
			searchTerm: '',
			chosenCryptoName: 'Bitcoin',
			chosenCryptoSymbol: 'BTC'
		};

		this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.handleChosenCryptoName = this.handleChosenCryptoName.bind(this);
		this.handleChosenCryptoSymbol = this.handleChosenCryptoSymbol.bind(this);
	}

	// the term entered into 'searchBar' component
	handleSearchTerm(searchTerm) {
		this.setState({ searchTerm: searchTerm });
	}

	// when 'news' arrow is clicked for a crypto asset row in the table
	handleChosenCryptoName(chosenCryptoName) {
		this.setState({ chosenCryptoName: chosenCryptoName });
	}

	// when 'news' arrow is clicked for a crypto asset row in the table
	handleChosenCryptoSymbol(chosenCryptoSymbol) {
		this.setState({ chosenCryptoSymbol: chosenCryptoSymbol });
	}

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route
						exact
						path="/"
						render={props => (
							<div>
								<BurgerMenu />
								<HeaderBar />
								<SearchBar
									className={'hide-on-ipad'}
									searchTerm={this.state.searchTerm}
									handleSearchTerm={this.handleSearchTerm}
								/>

								<CryptoTable
									searchTerm={this.state.searchTerm}
									handleChosenCryptoName={this.handleChosenCryptoName}
									handleChosenCryptoSymbol={this.handleChosenCryptoSymbol}
								/>
							</div>
						)}
					/>

					<Route
						path="/news"
						render={props => (
							<CryptoNews
								chosenCryptoName={this.state.chosenCryptoName}
								chosenCryptoSymbol={this.state.chosenCryptoSymbol}
							/>
						)}
					/>

					<Route
						path="/chart"
						render={props => (
							<CryptoChart
								chosenCryptoName={this.state.chosenCryptoName}
								chosenCryptoSymbol={this.state.chosenCryptoSymbol}
							/>
						)}
					/>

					<Route render={() => <h1>Page not found</h1>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
