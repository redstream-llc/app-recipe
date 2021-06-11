const fetchData = function (url) {
  return fetch('data' + url).then(res => res.json());
}

export default fetchData;
