/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 01:55:53
 * @LastEditTime: 2023-02-14 01:14:10
 * @LastEditors: wsy
 */
import express from 'express';
const Response = express()

Response.get('/', (req, res) => {
  res.set('link', '123')
  res.send('Response Homepage');
})

Response.use((req, res, next) => {
  next()
})


export default Response;

