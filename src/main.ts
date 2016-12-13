let commander = require('commander');

let config = require('../package.json');

commander
    .version(config.version)
    .option('-o, --option <item>', 'Describe here your commander option')
    .parse(process.argv);

console.log("Hello World !");



