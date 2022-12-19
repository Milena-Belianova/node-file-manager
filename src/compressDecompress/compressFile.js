import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliCompress } from 'zlib';

export const compressFile = async (pathToFile, pathToDestination) => {
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToDestination);
    const brotliCompress = createBrotliCompress();

    await pipeline(readableStream, brotliCompress, writableStream);
};

// compress hey9.txt archive.br
// compress hey9.txt test\brotliArchive.br
