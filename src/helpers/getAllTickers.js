import axios from "axios";

export default async function getAllTickers() {
  // const request = axios.get(`https://api.coinmarketcap.com/v1/ticker/`);
  // return request;
  const data = await fetch(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      mode: "no-cors",
      qs: {
        start: "1",
        limit: "1",
        convert: "USD,BTC",
      },
      headers: {
        "X-CMC_PRO_API_KEY": "905440c0-a1b4-4296-9f4f-451343d11623",
      },
      json: true,
      gzip: true,
    }
  );

  console.log(data);

  return data;
}
