const express = require('express')
const cron = require('node-cron')
const FetchService = require('./service/FetchService')

//schedule
const EVERY_1_MIN_CRON = '* * * * *'
const EVERY_30_MINS_CRON = '0 0/30 * 1/1 * ? *'
const EVERY_60_MINS_CRON = '0 0 0/1 1/1 * ? *'

app = express()

cron.schedule(EVERY_1_MIN_CRON, () => {
  FetchService.getFeatured()
  FetchService.getFeed()
})

app.listen(3030)