/** @format */
const fs = require('fs'); // "fs" is from File System. And "require" is the way to import packages in node.
const colors = require('colors');

const createFile = async (number = 1, toList = true, length = 10) => {
	try {
		// If everything goes well
		if (toList)
			console.log(
				'====================\n'.green +
					` Table of: ${colors.yellow(number)}\n` +
					'===================='.green
			);

		let output = '';
		let view = '';

		for (let i = 1; i <= length; i++) {
			view += `${number} ${colors.blue('x')} ${i} ${colors.red('=')} ${number * i}\n`; // To show the output with colors in the console
			output += `${number} x ${i} = ${number * i}\n`; // To create the file without colors
		}

		if (toList) console.log(view);

		fs.writeFileSync(`tabla-${number}.txt`, output);
		// First parameter the name of the file. Second the content of the file.
		return `tabla-${number}.txt`;
	} catch (err) {
		// If not...
		throw err;
	}
};

// In node we can't use export. module.export is the way.
module.exports = {
	createFile,
};
