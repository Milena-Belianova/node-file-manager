import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

export const calculateHash = async (pathToFile) => {
    const data  = await readFile(pathToFile);
    const hash = createHash('sha256');
    hash.update(data);
    console.log(hash.digest('hex'));
};

// hash hey9.txt
