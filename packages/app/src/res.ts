/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-07 01:55:53
 * @LastEditTime: 2023-02-14 01:10:45
 * @LastEditors: wsy
 */
import express from 'express';
const Response = express()

Response.get('/', (req, res) => {
  console.log(res.headersSent);
  res.send('Response Homepage');
  console.log(res.headersSent);
})

Response.use((req, res, next) => {
  next()
})


export default Response;

