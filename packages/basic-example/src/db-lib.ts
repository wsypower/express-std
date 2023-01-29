/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 23:36:13
 * @LastEditTime: 2023-01-30 01:42:34
 * @LastEditors: wsy
 */
import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const dbPath = resolve(
  __dirname,
  'db.json'
)

export async function readDB(): Promise<DB> {
  try {
    const data = await readFile(dbPath, 'utf8')
    return JSON.parse(data) as DB
  } catch (err) {
    return {
      todo: [],
      users: []
    }

  }
}

export async function writeDB(data: DB) {
  try {
    await writeFile(dbPath, JSON.stringify(data))
  } catch (error) {
    console.error(error)
  }
}
