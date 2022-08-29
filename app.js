/** @format */

const { createFile } = require('./helpers/multiply'); // Require is like the import in Javascript for Node.
const argv = require('./config/yargs');
require('colors');

console.clear(); // To clear the console.

/**
 * The difficult and incorrect way:
 * console.log(process.argv); // This will show info in the console about path and params. The third param is the argument.
 * const [, , arg3 = 'base=1'] = process.argv;
 * const [, base = 1] = arg3.split('='); // In this way we can get the param sent in the console.
 */

/**
 * The corret way to get info from the console with yargs.
 */

const { base, toList, length } = argv;

createFile(base, toList, length)
	.then((fileName) => console.log(`${fileName.rainbow} created`))
	.catch((err) => console.log(err));
