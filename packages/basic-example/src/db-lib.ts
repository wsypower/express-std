/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-27 23:36:13
 * @LastEditTime: 2023-01-28 01:20:15
 * @LastEditors: wsy
 */
// import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { resolve, dirname } from 'node:path'

const dbPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  'db.json'
)

async function readDB(): Promise<DB | Record<string, any>> {
  // try {
  //   const data = await readFile(dbPath, 'utf8')
  //   return JSON.parse(data) as DB
  // } catch (err) {
  //   return {}
  // }
  return {}
}
export default {
  readDB
}
// export async function writeDB(data: DB) {
//   try {
//     await writeFile(dbPath, JSON.stringify(data))
//   } catch (error) {
//     console.error(error)
//   }
// }
