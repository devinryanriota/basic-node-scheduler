const axios = require('axios')

const FEATURED_API = 'https://yukbantubisnis.online/api/businesses/featured'
const FEED_API = 'https://yukbantubisnis.online/api/businesses/feed'

let FetchService = {}

FetchService.getFeatured = () => {
  axios.get(FEATURED_API, {
    params: {}
  })
  .then((response) => {
    if(response !== null && response.data.meta.http_status === 200) {
      console.log('[FETCH_SERVICE] successfully fetch featured at ' + Date.now())
    } else {
      console.log('[FETCH_SERVICE] failed to fetch featured at ' + Date.now())
    }
  })
}

FetchService.getFeed = () => {
  axios.get(FEED_API, {
    params: {}
  })
  .then((response) => {
    if(response !== null && response.data.meta.http_status === 200) {
      console.log('[FETCH_SERVICE] successfully fetch feed at ' + Date.now())
    } else {
      console.log('[FETCH_SERVICE] failed to fetch feed at ' + Date.now())
    }
  })
}

module.exports = FetchService