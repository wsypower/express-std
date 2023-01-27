/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-01-28 01:07:43
 * @LastEditTime: 2023-01-28 01:07:48
 * @LastEditors: wsy
 */
class HttpException extends Error {
  public status: number;
  public message: string;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpException;
