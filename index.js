const express = require('express')
const cron = require('cron')

//schedule
const EVERY_30_MINS_CRON = '0 0/30 * 1/1 * ? *'
const EVERY_60_MINS_CRON = '0 0 0/1 1/1 * ? *'

//action
const FEATURED_API = 'https://yukbantubisnis.online/api/businesses/featured'
const FEED_API = 'https://yukbantubisnis.online/api/businesses/feed'

app = express()

cron.schedule(EVERY_30_MINS_CRON, () => {

})

app.listen(3030)