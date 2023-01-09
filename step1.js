function cat(path) {
    const fs = require('fs');

    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.error('ERROR:', err)
            process.exit(1)
        }
        console.log(data);
    });
}

//invokation code???