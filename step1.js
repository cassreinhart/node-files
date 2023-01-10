import fs from 'fs';
import process from 'process';

function cat(path) {

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error('ERROR:', err)
            process.exit(1)
        }
        console.log(data);
    });
}

cat(process.argv[2]);