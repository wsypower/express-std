import express from 'express'

const router = express()

router.route('/per').get((req, res) => {
  res.send('GET')
}).post((req, res) => {
  res.send('POST')
}).put((req, res) => {
  res.send('PUT')
})

export default router
