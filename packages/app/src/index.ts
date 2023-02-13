import express from 'express'
import admin from './admin'
import Response from './res'
const app = express()
app.use('/admin', admin); // mount the sub app
app.use('/res', Response); // mount the sub app

app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next) => {
  next()
})

app.get('/', (req, res) => {
  console.log('locals', app.locals);
  res.send('Hello World!');
})




app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
