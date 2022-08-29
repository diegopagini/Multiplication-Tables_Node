/** @format */
const fs = require('fs'); // "fs" is from File System. And "require" is the way to import packages in node.
const colors = require('colors');

const createFile = async (number = 1, toList = true) => {
	try {
		// If everything goes well
		if (toList)
			console.log(
				'====================\n'.green +
					` Table of: ${colors.yellow(number)}\n` +
					'===================='.green
			);

		let output = '';

		for (let i = 1; i <= 10; i++) {
			output += `${number} ${colors.blue('x')} ${i} ${colors.red('=')} ${number * i}\n`;
		}

		if (toList) console.log(output);

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
