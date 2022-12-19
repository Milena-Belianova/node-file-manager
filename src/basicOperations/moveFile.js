import fs from 'fs';
import { pipeline } from 'stream/promises';
import { rm } from 'fs/promises';

export const moveFile = async (pathToFile, pathToNewDirectory) => {
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToNewDirectory);
    await pipeline(readableStream, writableStream);
    await rm(pathToFile);
};

// mv hey2.txt test\hey2.txt
