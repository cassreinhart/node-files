import fs from "fs";
import axios from 'axios';
import process from "process";

function cat(path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error('ERROR:', err)
            process.exit(1)
        }
        console.log(data);
    });
}

async function webCat(url) {

    try {
        let webPage = await axios.get(url)
        console.log(webPage.data);
    } catch (err) {
        console.error(`Error: Cannot get ${url}: ${err}.`)
        process.exit(1)
    }
}

let path = process.argv[2];

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}