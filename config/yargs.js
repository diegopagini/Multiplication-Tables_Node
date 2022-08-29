/** @format */

const argv = require('yargs')
	.option('b', {
		// option b y to use it like -b or --base in the console.
		alias: 'base',
		type: 'number',
		demandOption: true,
		describe: 'basis for the multiplication table',
	})
	.option('l', {
		alias: 'length',
		type: 'number',
		demandOption: false,
		default: 10,
		describe: 'length of the table',
	})
	.option('t', {
		alias: 'toList',
		type: 'boolean',
		demandOption: false,
		default: true,
		describe: 'show table in console',
	})
	.check((argv, options) => {
		if (isNaN(argv.b)) {
			// isNan to check if is a number.
			throw 'Base must be a number';
		}
		return true; // If there is no error we must return true.
	}).argv;

module.exports = argv;
