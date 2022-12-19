import fs from 'fs';

export const readPrintFile = (path) => new Promise((resolve, reject) => {
    const readableStream = fs.createReadStream(path, 'utf8');

    readableStream.on('error', () => {
      console.log('Operation failed');
  })

    readableStream.on('data', (chunk) => {
      resolve(chunk);
      console.log(chunk);
  })
});