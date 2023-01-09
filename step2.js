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

function webCat(url) {
    const axios = require('axios');

    axios.readFile(url, 'utf8', function() {
        //not sure what to do-- readFile even available for axios? or axios.get()?????
    })
}