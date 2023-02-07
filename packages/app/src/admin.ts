/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 01:55:53
 * @LastEditTime: 2023-02-07 02:28:00
 * @LastEditors: wsy
 */
import express from 'express';
const admin = express()

admin.on('mount', function (parent) {
  console.log('Admin Mounted')
})

admin.get('/', (req, res) => {
  res.send('Admin Homepage');
})

admin.use((req, res, next) => {
  admin.set('title', false)
  admin.get('title')

  admin.enable('title')


  console.log(admin.locals);

  next()
})


export default admin;

