/*
    Usage:
    node ./format-json.js inputFileName [outputFileName]
*/

const fs = require('fs');

async function run(inputFileName, outputFileName) {
    const input = fs.readFileSync(inputFileName).toString();
    const parsed = JSON.parse(input);
    const formatted = JSON.stringify(parsed, null, 2);
    fs.writeFileSync(outputFileName, formatted);
}

const args = process.argv.slice(2);
const inputFileName = args[0];
let outputFileName = args[1] || `${inputFileName}.formatted`;

console.log(`Going to format JSON '${inputFileName}' into ${outputFileName}`);

run(inputFileName, outputFileName);
