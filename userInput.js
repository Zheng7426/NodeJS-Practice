const readline = require('readline');

const myInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

myInterface.question(`What's your name?`, name => {
    console.log(`Hi ${name}!`);
    myInterface.close()
});
