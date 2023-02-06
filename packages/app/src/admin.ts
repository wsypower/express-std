/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 01:55:53
 * @LastEditTime: 2023-02-07 01:55:58
 * @LastEditors: wsy
 */
import express from 'express';
const admin = express()

admin.on('mount', function (parent) {
  console.log('Admin Mounted')
})

admin.get('/', (req, res) => {
  console.log(req.baseUrl);
  res.send('Admin Homepage');
})

admin.use((req, res, next) => {
  console.log('Time:', Date.now())
  next()
})

admin.all('/end', (req, res, next) => {
  console.log('Accessing the secret section ...')
  res.send('Accessing the secret section ...')
})


export default admin;

