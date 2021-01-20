const readline = require('readline');
const fs = require('fs');

const myInterface = readline.createInterface({input: fs.createReadStream('./shoppingList.txt')});

const printData = (data) => {
	console.log(`Item: ${data}`);
}

const fileStream = fs.createWriteStream('shResults.txt');

const transformData = (line) => {
	fileStream.write(`They were out of ${line}\n`);
};

myInterface.on('line', transformData);
