import React, { Component } from 'react';
import BurgerMenu from './components/BurgerMenu';
import HeaderBar from './components/HeaderBar';
import SearchBar from './components/SearchBar';
import CryptoTable from './components/CryptoTable';
import FooterBar from './components/FooterBar';
import CryptoNews from './components/CryptoNews';
import CryptoChart from './components/CryptoChart';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
	// if user visits 'cryptoNews' or 'cryptoChart' pages the default chosen crypto asset is Bitcoin
	state = {
		searchTerm: '',
		chosenCryptoName: 'Bitcoin',
		chosenCryptoSymbol: 'BTC'
	};

	// the term entered into 'searchBar' component
	handleSearchTerm = searchTerm => {
		this.setState({ searchTerm: searchTerm });
	};

	// when 'news' arrow is clicked for a crypto asset, change 'chosenCryptoName' state
	handleChosenCryptoName = chosenCryptoName => {
		this.setState({ chosenCryptoName: chosenCryptoName });
	};

	// when 'news' arrow is clicked for a crypto asset, change 'chosenCryptoSymbol' state
	handleChosenCryptoSymbol = chosenCryptoSymbol => {
		this.setState({ chosenCryptoSymbol: chosenCryptoSymbol });
	};

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
								<FooterBar />
							</div>
						)}
					/>

					<Route
						path="/news"
						render={props => (
							<div>
								<CryptoNews
									chosenCryptoName={this.state.chosenCryptoName}
									chosenCryptoSymbol={this.state.chosenCryptoSymbol}
								/>
								<FooterBar />
							</div>
						)}
					/>

					<Route
						path="/chart"
						render={props => (
							<div>
								<CryptoChart
									chosenCryptoName={this.state.chosenCryptoName}
									chosenCryptoSymbol={this.state.chosenCryptoSymbol}
									chosenCryptoPrice={this.state.chosenCryptoPrice}
								/>
								<FooterBar />
							</div>
						)}
					/>

					<Route render={() => <h1>Page not found</h1>} />
				</Switch>
			</BrowserRouter>
		);
	}
}

export default App;
