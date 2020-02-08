/*
    Import JSON array from file into Elasticsearch 
*/

const fs = require("fs");
const fetch = require("node-fetch");

const parsed = JSON.parse(
  fs.readFileSync("./input.txt").toString()
);

async function run() {
  for (const item of parsed) {
    console.log("Writing next item", item);
    const response = await fetch("http://127.0.0.1:9200/test/_doc", {
      method: "post",
      body: JSON.stringify(item),
      headers: { "Content-Type": "application/json" }
    });

    await new Promise(res => {setTimeout(res, 1000)});
  }
}

run();
