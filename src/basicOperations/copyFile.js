import fs from 'fs';
import { pipeline } from 'stream/promises';

export const copyFile = async (pathToFile, pathToNewDirectory) => {
    const readableStream = fs.createReadStream(pathToFile);
    const writableStream = fs.createWriteStream(pathToNewDirectory, { flags: 'wx' });
    await pipeline(readableStream, writableStream);
};

// cp path_to_file path_to_new_directory
// cp hey9.txt test\hey9.txt
