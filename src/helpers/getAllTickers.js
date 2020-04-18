import axios from "axios";

export default async function getAllTickers() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; // When running locally Add this to front of the url in fetch call to avoid localhost CORS problems
  const REACT_APP_CMC_PRO_API_KEY =
    process.env.REACT_APP_CMC_PRO_API_KEY || null; // replace null with your own CoinMarketCap API key when running locally
  console.log(`react app cmc api key = `, REACT_APP_CMC_PRO_API_KEY);
  console.log(process.env);

  const response = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      qs: {
        start: "1",
        limit: "100",
        convert: "USD,BTC",
      },
      headers: {
        Accept: "application/json",
        "Accept-Encoding": "deflate, gzip",
        "X-CMC_PRO_API_KEY": `${REACT_APP_CMC_PRO_API_KEY}`,
      },
      json: true,
      gzip: true,
    }
  );

  const json = await response.json();

  return json.data;
}
