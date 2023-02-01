import bytes from 'bytes'

console.log(bytes(1024));// => '1KB'

console.log(bytes('1KB')); // => 1024

console.log(bytes(1024 * 1024));// => '1MB'
console.log(bytes('1MB'));// => 1048576

console.log(bytes(1024 * 1024 * 1024));// => '1GB'
console.log(bytes('1GB'));// => 1073741824

console.log(bytes(1024 * 1024 * 1024 * 1.75517452, {
  decimalPlaces: 3,
  unitSeparator: '*-*',
  unit: 'kb',
  thousandsSeparator: "-",
}));// => '1-840-433.877*-*kb'
console.log('------------');

console.log(bytes(1024));
// output: '1KB'

console.log(bytes(1024 * 1024));
// output: '1MB'

console.log(bytes(1024 * 1024 * 1024));
// output: '1GB'

console.log(bytes(1024 * 1024 * 1024 * 1024));
// output: '1TB'

console.log(bytes(1024 * 1024 * 1024 * 1024 * 1024));
// output: '1PB'

