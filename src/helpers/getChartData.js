import axios from 'axios';

// returns the previous 60 days price action for a given crypto asset symbol
export default function getChartData(tickerSymbol) {
	const request = axios.get(
		`https://min-api.cryptocompare.com/data/histoday?fsym=${tickerSymbol}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`
	);
	return request;
}
