const express = require('express')
const cron = require('node-cron')
const FetchService = require('./service/FetchService')

const PORT = process.env.PORT || 3000

//schedule
const EVERY_1_MIN_CRON = '* * * * *'
const EVERY_10_MINS_CRON = '*/15 * * * *'
const EVERY_15_MINS_CRON = '*/15 * * * *'
const EVERY_30_MINS_CRON = '*/30 * * * *'
const EVERY_60_MINS_CRON = '0 */1 * * *'

app = express()

console.log('app running on port: ' +  PORT)

cron.schedule(EVERY_10_MINS_CRON, () => {
  FetchService.getFeatured()
  FetchService.getFeed()
})

app.get('/', (req, res) => {
  res.send('nothing to see here')
})

app.get('/health', (req, res) => {
  res.send('it is running!')
})

app.get('/easter', (req, res) => {
  res.send('you have reached the land of infinite retreat. please retreat immediately :)')
})

app.listen(PORT)