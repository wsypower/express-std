/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 23:32:18
 * @LastEditTime: 2023-01-30 01:59:01
 * @LastEditors: wsy
 */
import express, { Request, Response, NextFunction } from 'express'
import { readDB, writeDB } from './db-lib';
import HttpException from './HttpException'
import { has } from 'lodash'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/todos', async (req, res, next) => {
  try {


    const db = await readDB()
    res.status(200).json(db.todo)
  } catch (err) {
    next(err)
  }
})
app.get('/todos/:id', async (req, res, next) => {
  try {
    const db = await readDB()
    const id = parseInt(req.params.id)
    const todo = db.todo.find(todo => todo.id === id) ?? {}
    return res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
})

function isTodoValid(todo: unknown): todo is TodoItems {
  return has(todo, 'title')
}

app.post('/todos', async (req, res, next) => {
  try {
    // 1. 获取客户端请求体参数
    const todo = req.body
    // 2. 数据验证
    if (!isTodoValid(todo)) {
      return res.status(422).json({
        error: 'The field title is required.'
      })
    }
    // 3. 数据验证通过，把数据存储到 db 中
    const db = await readDB()

    const lastTodo = db.todo.at(-1)
    todo.id = lastTodo ? lastTodo.id + 1 : 1
    db.todo.push(todo)
    await writeDB(db)
    // 4. 发送响应
    res.status(201).json(todo)
  } catch (err) {
    next(err)
  }
})

app.patch('/todos/:id', async (req, res, next) => {
  try {
    // 1. 获取表单数据
    const todo = req.body

    // 2. 查找到要修改的任务项
    const db = await readDB()
    const id = parseInt(req.params.id)
    const ret = db.todo.find(todo => todo.id === id)
    if (!ret) {
      return res.status(404).end()
    }
    Object.assign(ret, todo)

    await writeDB(db)

    res.status(200).json(ret)
  } catch (err) {
    next(err)
  }
})

app.delete('/todos/:id', async (req, res, next) => {
  try {
    const todoId = parseInt(req.params.id)
    const db = await readDB()
    const index = db.todo.findIndex(todo => todo.id === todoId)
    if (index === -1) {
      return res.status(404).end()
    }
    db.todo.splice(index, 1)
    await writeDB(db)
    res.status(204).end()
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
