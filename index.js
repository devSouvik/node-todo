const fs = require("fs");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv)).argv;
// console.log(argv.title);
// console.log(argv.body);

let content = {
        title: argv.title,
        body: argv.body,
};

let command = argv._[0];
// console.log(command);

// let fileData = fs.readFileSync("notes.txt", "utf-8");

// console.log(argv);
if (command == "write") {
        // console.log("file is emplty");
        fs.appendFileSync(
                "notes.txt",
                // `${JSON.stringify(content)} \n`,
                `${content.title} : \t  ${content.body} \n`,
                (err) => {
                        if (err) {
                                console.error(err);
                        }
                }
        );
        console.log("new note added");
} else if (command == "read") {
        console.log(fs.readFileSync("notes.txt", "utf-8"));
}
