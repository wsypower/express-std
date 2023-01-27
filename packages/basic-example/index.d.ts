/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-28 00:27:26
 * @LastEditTime: 2023-01-28 00:27:35
 * @LastEditors: wsy
 */
interface DB {
  todos: Array<{
    title: string;
    id: number;
  }>;
  users: any[];
}

