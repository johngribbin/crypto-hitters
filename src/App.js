import React, { Component } from 'react';
import BurgerMenu from './components/BurgerMenu';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';
import CryptoNews from './components/CryptoNews';
import CryptoChart from './components/CryptoChart';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
			chosenCryptoName: 'Bitcoin',
			chosenCryptoSymbol: 'BTC'
		};

		this.handleSearchTerm = this.handleSearchTerm.bind(this);
		this.handleChosenCryptoName = this.handleChosenCryptoName.bind(this);
		this.handleChosenCryptoSymbol = this.handleChosenCryptoSymbol.bind(this);
	}

	handleSearchTerm(searchTerm) {
		this.setState({ searchTerm: searchTerm });
	}

	handleChosenCryptoName(chosenCryptoName) {
		this.setState({ chosenCryptoName: chosenCryptoName });
	}

	handleChosenCryptoSymbol(chosenCryptoSymbol) {
		this.setState({ chosenCryptoSymbol: chosenCryptoSymbol });
	}

	render() {
		return (
			<div>
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
			</div>
		);
	}
}

export default App;
