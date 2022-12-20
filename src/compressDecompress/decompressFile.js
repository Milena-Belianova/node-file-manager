import fs from 'fs';
import { pipeline } from 'stream/promises';
import { createBrotliDecompress } from 'zlib';

export const decompressFile = async (pathToFile, pathToDestination) => {
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToDestination);
    const brotliDecompress = createBrotliDecompress();

    await pipeline(readableStream, brotliDecompress, writableStream);
};

// decompress archive.br testBrotli.txt
// decompress test\brotliArchive.br heyBrotli.txt
