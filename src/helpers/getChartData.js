import axios from 'axios';

export default function getChartData(tickerSymbol) {
	const request = axios.get(
		`https://min-api.cryptocompare.com/data/histoday?fsym=${tickerSymbol}&tsym=USD&limit=60&aggregate=1&e=CCCAGG`
	);
	return request;
}
