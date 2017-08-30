import * as commander from 'commander';

commander
    .option('-o, --option <item>', 'Describe here your commander option')
    .parse(process.argv);

console.log("Hello World !");



