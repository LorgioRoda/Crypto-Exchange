const url = "https://api.coincap.io/v2";

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  mode: 'cors',
  header: {
    'Access-Control-Allow-Origin': '*'
  }
};

function getAssets() {
  return fetch(`${url}/assets?limit=20`, requestOptions)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`, requestOptions)
  .then(response => response.json())
  .then((response) => {
    return response.data;
  })
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`,requestOptions)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`, requestOptions)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`, requestOptions)
    .then((res) => res.json())
    .then((res) => res.data);
}

export default {
  getAssets,
  getAsset,
  getMarkets,
  getExchange,
  getAssetHistory,
};
