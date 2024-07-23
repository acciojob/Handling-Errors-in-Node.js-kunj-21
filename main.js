const fs = require('fs');


if (process.argv.length !== 3) {
  console.error('Usage: node readFile.js <file-path>');
  process.exit(1);
}

const filePath = process.argv[2];


fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(`Error: File '${filePath}' not found.`);
    } else {
      console.error(`Error reading the file: ${err.message}`);
    }
    process.exit(1);
  }

 
  console.log(data);
});


