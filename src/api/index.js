import phones from './mockPhones'

export const fetchPhonesApi = async () => {
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => resolve(phones), 300)
  //   // reject('error')
  // })

  //real api
  let response = await fetch('http://www.mocky.io/v2/5da57ba435000032d64a7b42');
  if (!response.ok) {
    alert("HTTP-Error: " + response.status);
  }
  let res = await response.json();
  return res.phones;
};

export const loadMorePhonesApi = async ({offset}) => {
  // fetch.get(`http://google.com/api/phones?offset=${offset}`)    example with real date
  return new Promise((resolve, reject) => {
    resolve(phones)
    // reject('error')
  })
}

