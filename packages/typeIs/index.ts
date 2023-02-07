/*
 * @Description: 
 * @Author: wsy
 * @Date: 2023-02-02 01:24:41
 * @LastEditTime: 2023-02-08 01:41:36
 * @LastEditors: wsy
 */
import typeIs from 'type-is';

declare module 'type-is' {
  function match(expected: false | string, actual: string): boolean
}


const mediaType = 'application/json'

typeIs.is(mediaType, ['json']) // => 'json'
typeIs.is(mediaType, ['html', 'json']) // => 'json'
typeIs.is(mediaType, ['application/*']) // => 'application/json'
typeIs.is(mediaType, ['application/json']) // => 'application/json'

typeIs.is(mediaType, ['html']) // => false


typeIs.match('text/html', 'text/html') // => true
typeIs.match('*/html', 'text/html') // => true
typeIs.match('text/*', 'text/html') // => true
typeIs.match('*/*', 'text/html') // => true
typeIs.match('*/*+json', 'application/x-custom+json') // => true


console.log(typeIs.normalize('json')); // => application/json
console.log(typeIs.normalize('multipart')); // => multipart/*
console.log(typeIs.normalize('multipart')); // => multipart/*
console.log(typeIs.normalize('urlencoded')); // => application/x-www-form-urlencoded






/**
 * Adds two numbers together.       
 * @param {number} a - the first number to add       
 * @param {number} b - the second number to add       
 * @returns {number} the sum of the two numbers       
 */
/**
 * Add takes two numbers and returns a number
 * @param {number} a - number
 * @param {number} b - number
 * @returns A number
 */
function add(a: number, b: number): number {
  return a + b
}

