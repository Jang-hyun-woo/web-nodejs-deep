const fs = require('fs');

function read_file() {
    try {
        const file_Data = fs.readFileSync('data.json');
    } catch {
        console.log('An error occurred!');
        return
    }
    console.log('Hi there!');
}

read_file();

module.exports = {
    read_file: read_file
}