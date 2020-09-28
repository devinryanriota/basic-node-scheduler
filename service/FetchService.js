const axios = require('axios')
const moment = require('moment')

const FEATURED_API = 'https://yukbantubisnis.online/api/businesses/featured'
const FEED_API = 'https://yukbantubisnis.online/api/businesses/feed'

let FetchService = {}

FetchService.getFeatured = () => {
  axios.get(FEATURED_API, {
    params: {}
  })
  .then((response) => {
    const time = moment().format('yyyy-MM-DD HH:mm:ss')
    if(response !== null && response.data.meta.http_status === 200) {
      console.log('[FETCH_SERVICE] successfully fetch featured at ' + time)
    } else {
      console.log('[FETCH_SERVICE] failed to fetch featured at ' + time)
    }
  })
}

FetchService.getFeed = () => {
  axios.get(FEED_API, {
    params: {}
  })
  .then((response) => {
    const time = moment().format('yyyy-MM-DD HH:mm:ss')
    if(response !== null && response.data.meta.http_status === 200) {
      console.log('[FETCH_SERVICE] successfully fetch feed at ' + time)
    } else {
      console.log('[FETCH_SERVICE] failed to fetch feed at ' + time)
    }
  })
}

module.exports = FetchService