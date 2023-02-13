/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 01:55:53
 * @LastEditTime: 2023-02-14 01:29:58
 * @LastEditors: wsy
 */
import express from 'express';
const Response = express()

Response.get('/', (req, res) => {
  res.set('link', '123')
  res.cookie('name', 'tobi', { domain: '.example.com', path: '/admin', secure: true })
  res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true })
  res.send('Response Homepage');
})

Response.get('/get', (req, res) => {
  console.log(res.get('Content-Type'));
  res.send('Response Homepage1');
})

Response.get('/json', (req, res) => {
  res.redirect('/res/get')
  // res.send({ name: 'tobi' });
})



Response.use((req, res, next) => {
  next()
})


export default Response;

