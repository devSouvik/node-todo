// console.log("hello world");

const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;

// const argv = process.argv;
// const argv = process.argv[2];

// console.log(argv);

// console.log(argv._); //prints the undefined values from the cli

// console.log(typeof argv);

// console.log(argv.fly);
// // console.log(typeof argv);
// if (argv.fly == "bird") {
//         console.log("a bird is flying");
// } else if (argv.fly == "aeroplane") {
//         console.log("an aeroplane is flying");
// } else {
//         console.log(`a ${argv.fly} is flying`);
// }
