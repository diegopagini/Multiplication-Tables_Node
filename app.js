/** @format */

const { createFile } = require('./helpers/multiply'); // Require is like the import in Javascript for Node.
const argv = require('yargs')
	.option('b', {
		// option b y to use it like -b or --base in the console.
		alias: 'base',
		type: 'number',
		demandOption: true,
	})
	.option('l', {
		alias: 'toList',
		type: 'boolean',
		demandOption: false,
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			// isNan to check if is a number.
			throw 'Base must be a number';
		}
		return true; // If there is no error we must return true.
	}).argv;

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

const { base, toList } = argv;

createFile(base, toList)
	.then((fileName) => console.log(`${fileName} created`))
	.catch((err) => console.log(err));
