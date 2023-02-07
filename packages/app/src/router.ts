import express from 'express'
import cookieParser from 'cookie-parser'
const router = express()
router.use(cookieParser())

router.route('/per').get((req, res) => {
  console.log('cookies', req.cookies);
  res.cookie('name', 'tobi', { domain: 'localhost', path: '/admin', secure: true });
  res.send('GET')
}).post((req, res) => {
  res.send('POST')
}).put((req, res) => {
  res.send('PUT')
})

export default router
