import axios from "axios";

export default function getRedditResults(cryptoName) {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";

  const request = axios.get(
    proxyurl +
      `https://www.reddit.com/search.json?q=${cryptoName}&sort=top&t=day`
  );

  return request;
}
