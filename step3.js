import fs from "fs";
import axios from 'axios';
import process from "process";

function handleOutput(data, out) {
    if (out) {
        fs.writeFile(out, data, 'utf8', function(err) {
            if (err) {
                console.error(`Error writing ${out}: ${err}.`)
                process.exit(1)
            }
        });
    } else {
        console.log(data)
    }
}

function cat(path, out) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error('ERROR:', err);
            process.exit(1);
        } else {
            handleOutput(data, out);
        }
    });
}

async function webCat(url, out) {

    try {
        let webPage = await axios.get(url)
        handleOutput(webPage.data, out)
    } catch (err) {
        console.error(`Error: Cannot get ${url}: ${err}.`)
        process.exit(1)
    }
}

let out;
let path;

if (process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
}

if (path.slice(0, 4) === 'http') {
    webCat(path);
} else {
    cat(path);
}