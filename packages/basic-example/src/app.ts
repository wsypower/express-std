/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 23:32:18
 * @LastEditTime: 2023-01-28 01:21:34
 * @LastEditors: wsy
 */
import express, { Request, Response, NextFunction } from 'express'
import DBfile from './db-lib';
import HttpException from './HttpException'


const app = express()


app.get('/todos', async (req, res, next) => {
  try {
    const db = await DBfile.readDB()
    res.status(200).json(db.todos ?? {})
  } catch (err) {
    next(err)
  }
})


app.use((err: HttpException, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).send('Something broke!')
})

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`)
})
