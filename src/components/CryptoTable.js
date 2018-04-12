import React, { Component } from 'react';
import CryptoRows from './CryptoRows';
import getAllTickers from '../helpers/getAllTickers';
import sortStringData from '../helpers/sortStringData';
import sortNumberData from '../helpers/sortNumberData';
import PropTypes from 'prop-types';

class CryptoTable extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tickers: []
		};

		this.sortStringData = this.sortStringData.bind(this);
		this.sortNumberData = this.sortNumberData.bind(this);
	}

	componentDidMount() {
		getAllTickers().then(response => {
			this.setState({
				tickers: response.data
			});
		});
	}

	sortStringData(event) {
		var currentTickers = this.state.tickers;
		const headerName = event.target.value;
		var sortedTickers;

		if (event.target.checked === true) {
			sortedTickers = currentTickers.sort(sortStringData(headerName));
		} else {
			// sort column descending on second click
			sortedTickers = currentTickers.sort(sortStringData(headerName, 'desc'));
		}

		this.setState({
			tickers: sortedTickers
		});
	}

	sortNumberData(event) {
		var currentTickers = this.state.tickers;
		const headerName = event.target.value;
		var sortedTickers;

		if (event.target.checked === true) {
			sortedTickers = sortNumberData(currentTickers, headerName);
		} else {
			// sort the columb smallest to largest on second click
			sortedTickers = sortNumberData(currentTickers, headerName).reverse();
		}

		this.setState({
			tickers: sortedTickers
		});
	}

	render() {
		return (
			<div className="crypto-table__container" overflow="auto">
				<table className="crypto-table__table" cellPadding="0" cellSpacing="0">
					<thead>
						<tr id="crypto-table__header-row">
							<td className="crypto-table__table-header-data">
								<label className="crypto-table__header-text">
									RANK
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="rank"
										onClick={this.sortNumberData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data">
								<label className="crypto-table__header-text">
									NAME
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="name"
										onClick={this.sortStringData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data hide-on-ipad">
								<label className="crypto-table__header-text">
									SYMBOL
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="symbol"
										onClick={this.sortStringData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data">
								<label className="crypto-table__header-text">
									PRICE
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="price_usd"
										onClick={this.sortNumberData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data hide-on-tablet">
								<label className="crypto-table__header-text">
									MARKET CAP
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="market_cap_usd"
										onClick={this.sortNumberData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data">
								<label className="crypto-table__header-text">
									CHANGE (24HR)
									<br />
									<i className="material-icons crypto-table__sorting-arrows rotate-90">
										compare_arrows
									</i>
									<input
										type="checkbox"
										className="crypto-table__checkbox"
										value="percent_change_24h"
										onClick={this.sortNumberData}
									/>
								</label>
							</td>
							<td className="crypto-table__table-header-data">
								<label className="crypto-table__header-text">NEWS</label>
								<br />
								<i className="material-icons rotate-90 opaque">compare_arrows</i>
							</td>
						</tr>
					</thead>

					<tbody className="crypto-table__table-body">
						<CryptoRows
							tickers={this.state.tickers}
							searchTerm={this.props.searchTerm}
							handleChosenCryptoName={this.props.handleChosenCryptoName}
							handleChosenCryptoSymbol={this.props.handleChosenCryptoSymbol}
						/>
					</tbody>
				</table>
			</div>
		);
	}
}

CryptoTable.propTypes = {
	searchTerm: PropTypes.string,
	handleMoveToNews: PropTypes.func
};

export default CryptoTable;
