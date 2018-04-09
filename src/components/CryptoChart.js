import React, { Component } from 'react';
import getChartData from '../helpers/getChartData';
import { Bar } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CryptoChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			chartData: []
		};
	}

	// 'obj.close' is the 'closing price' on the day
	componentDidMount() {
		getChartData(this.props.chosenCryptoSymbol).then(response => {
			this.setState({
				chartData: response.data.Data.map(obj => obj.close)
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.chosenCryptoSymbol !== nextProps.chosenCryptoSymbol) {
			getChartData(nextProps.chosenCryptoSymbol).then(response => {
				this.setState({
					chartData: response.data.Data.map(obj => obj.close)
				});
			});
		}
	}

	render() {
		return (
			<div className="chart__container">
				<Link to="/news">
					<i class="material-icons md-36 float-left">keyboard_arrow_left</i>
				</Link>
				<Link to="/">
					<i class="material-icons float-right">home</i>
				</Link>
				<div className="chart__chart">
					<Bar
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
								1
							],
							datasets: [
								{
									backgroundColor: '#536976',
									data: this.state.chartData,
									fontColor: 'black',
									fontFamily: 'Inconsolata',
									label: 'Price (USD)'
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
								fontFamily: 'Inconsolata',
								text: `60 Day Price Action of ${this.props.chosenCryptoName}`
							},
							scales: {
								yAxes: [
									{
										scaleLabel: {
											display: true,
											fontColor: 'black',
											fontFamily: 'Inconsolata',
											labelString: 'Closing Price (USD)'
										}
									}
								],
								xAxes: [
									{
										scaleLabel: {
											display: true,
											fontColor: 'black',
											fontFamily: 'Inconsolata',
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
