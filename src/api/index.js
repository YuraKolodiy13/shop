import phones from './mockPhones'

export const fetchPhonesApi = async => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(phones), 300)
    // reject('error')
  })
}

export const loadMorePhonesApi = async ({offset}) => {
  // fetch.get(`http://google.com/api/phones?offset=${offset}`)    example with real date
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(phones), 300)
    // reject('error')
  })
}