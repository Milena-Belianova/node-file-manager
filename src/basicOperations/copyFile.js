import fs from 'fs';
import { pipeline } from 'stream/promises';

export const copyFile = async (pathToFile, pathToNewDirectory) => {
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToNewDirectory);
    await pipeline(readableStream, writableStream);
};

// cp hey9.txt test\\hey9.txt
