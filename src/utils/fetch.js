function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  throw response.statusText;
}

export default function (url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(response => response.json());
}
