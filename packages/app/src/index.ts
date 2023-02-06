import express from 'express'

const app = express()
const admin = express()

admin.get('/', (req, res) => {
  console.log(req.baseUrl);
  res.send('Admin Homepage');
})

admin.on('mount', function (parent) {
  console.log('Admin Mounted')
  console.log(parent === app); // true
})

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
