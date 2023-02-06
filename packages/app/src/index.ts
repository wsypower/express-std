import express from 'express'
import admin from './admin'
const app = express()



app.use(express.json())
app.use(express.urlencoded())

app.use((req, res, next) => {
  next()
})

app.get('/', (req, res) => {
  console.log('locals', app.locals);
  res.send('Hello World!');
})

app.use('/admin', admin); // mount the sub app

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
})
