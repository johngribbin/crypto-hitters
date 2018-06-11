import React, { Component } from 'react';
import getChartData from '../helpers/getChartData';
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CryptoChart extends Component {
	state = {
		chartData: []
	};

	// 'obj.close' is the 'closing price' on the day
	componentDidMount() {
		const { chosenCryptoSymbol } = this.props;

		getChartData(chosenCryptoSymbol).then(response => {
			this.setState({
				chartData: response.data.Data.map(obj => obj.close)
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		const { chosenCryptoSymbol } = this.props;

		if (chosenCryptoSymbol !== nextProps.chosenCryptoSymbol) {
			getChartData(nextProps.chosenCryptoSymbol).then(response => {
				this.setState({
					chartData: response.data.Data.map(obj => obj.close)
				});
			});
		}
	}

	render() {
		const { chartData } = this.state;
		const { chosenCryptoSymbol, chosenCryptoName } = this.props;

		return (
			<div>
				<h1 className="news__app-title">CRYPTO HITTERS</h1>
				<section className="news__header-section">
					<div className="news__icon-container--left">
						<Link to="/news">
							<i className="material-icons md-48 float-left">keyboard_arrow_left</i>
						</Link>
					</div>

					<div className="news__header-container-center">
						<div className="news__crypto-logo-name-container">
							<img
								className="news__ticker-image"
								src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/${this.props.chosenCryptoSymbol.toLowerCase()}.png`}
								alt={chosenCryptoSymbol}
							/>
							<h1 className="news__header-text">{chosenCryptoName}</h1>
						</div>
						SIXTY DAY PRICE ACTION
					</div>

					<div className="chart__home-icon-container">
						<Link to="/">
							<i className="material-icons md-48">home</i>
						</Link>
					</div>
				</section>

				<div className="chart__chart">
					<Line
						data={{
							labels: [
								60,
								59,
								58,
								57,
								56,
								55,
								54,
								53,
								52,
								51,
								50,
								49,
								48,
								47,
								46,
								45,
								44,
								43,
								42,
								41,
								40,
								39,
								38,
								37,
								36,
								35,
								34,
								33,
								32,
								31,
								30,
								29,
								28,
								27,
								26,
								25,
								24,
								23,
								22,
								21,
								20,
								19,
								18,
								17,
								16,
								15,
								14,
								13,
								12,
								11,
								10,
								9,
								8,
								7,
								6,
								5,
								4,
								3,
								2,
								1,
								'NOW'
							],
							datasets: [
								{
									backgroundColor: 'rgb(251, 145, 58)',
									borderColor: 'rgb(251, 145, 58)',
									data: chartData,
									fontFamily: 'Source Code Pro',
									fill: false,
									label: 'Price (USD)',
									pointBorderColor: 'rgb(29, 33, 36)',
									pointBackgroundColor: '#fff',
									pointHoverBackgroundColor: 'rgba(75,192,192,1)'
								}
							]
						}}
						height={25}
						width={25}
						options={{
							maintainAspectRatio: false,
							legend: {
								labels: {
									fontColor: 'black'
								}
							},
							title: {
								display: true,
								fontColor: 'black',
								fontFamily: 'Source Code Pro',
								text: `60 Day Price Action of ${chosenCryptoName}`
							},
							scales: {
								yAxes: [
									{
										scaleLabel: {
											display: true,
											fontColor: 'black',
											fontFamily: 'Source Code Pro',
											labelString: 'Closing Price (USD)'
										}
									}
								],
								xAxes: [
									{
										scaleLabel: {
											display: true,
											fontColor: 'black',
											fontFamily: 'Source Code Pro',
											labelString: 'Previous 60 days'
										}
									}
								]
							}
						}}
					/>
				</div>
			</div>
		);
	}
}

CryptoChart.propTypes = {
	chosenCryptoSymbol: PropTypes.string,
	chosenCryptoName: PropTypes.string
};

export default CryptoChart;
