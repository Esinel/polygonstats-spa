/*
Simple custom made PROXY that
saves us from CORS hell
*/

const CORS_PROXY = `https://cors-proxy-eur.herokuapp.com/`;

export async function doFetch(url, corsBypass = false) {
  if (corsBypass) {
    url = CORS_PROXY + url;
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  if (!response.ok) throw `HTTP error ${response.status}`;

  return response.json();
}
