/** @format */

const { createFile } = require('./helpers/multiply');

console.clear(); // To clear the console.

console.log(process.argv); // This will show info in the console about path and params. The third param is the argument.
const [, , arg3 = 'base=1'] = process.argv;
const [, base = 1] = arg3.split('='); // In this way we can get the param sent in the console.

createFile(base)
	.then((fileName) => console.log(`${fileName} created`))
	.catch((err) => console.log(err));
