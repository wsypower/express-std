/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-28 00:27:26
 * @LastEditTime: 2023-01-29 02:13:42
 * @LastEditors: wsy
 */

declare interface TodoItems {
  title: string;
  id: number;
}

declare interface DB {
  todo: TodoItems[];
  users: any[];
}

