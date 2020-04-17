import axios from "axios";

export default async function getAllTickers() {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const url =
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest"; // site that doesn’t send Access-Control-*

  const response = await fetch(proxyurl + url, {
    qs: {
      start: "1",
      limit: "100",
      convert: "USD,BTC",
    },
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "deflate, gzip",
      "X-CMC_PRO_API_KEY": "905440c0-a1b4-4296-9f4f-451343d11623",
    },
    json: true,
    gzip: true,
  });

  const json = await response.json();

  return json.data;
}
