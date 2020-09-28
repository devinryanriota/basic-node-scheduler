const express = require('express')
const cron = require('node-cron')
const FetchService = require('./service/FetchService')

const PORT = 3030

//schedule
const EVERY_1_MIN_CRON = '* * * * *'
const EVERY_15_MINS_CRON = '*/15 * * * *'
const EVERY_30_MINS_CRON = '*/30 * * * *'
const EVERY_60_MINS_CRON = '0 */1 * * *'

app = express()

console.log('app running on port: ' +  PORT)

cron.schedule(EVERY_30_MINS_CRON, () => {
  FetchService.getFeatured()
  FetchService.getFeed()
})

app.get('/', (req, res) => {
  res.send('it is running!')
})

app.listen(PORT)