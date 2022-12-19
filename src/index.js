import os from 'os';
import * as readline from 'readline/promises';
import { stdin as input, stdout as output, cwd, chdir } from 'process';
import { printList } from './nwd/printList.js';
import { changeDir } from './nwd/changeDir.js';
import { readPrintFile } from './basicOperations/readPrintFile.js';
import { createEmptyFile } from './basicOperations/createEmptyFile.js';
import { renameFile } from './basicOperations/renameFile.js';
import { copyFile } from './basicOperations/copyFile.js';
import { deleteFile } from './basicOperations/deleteFile.js';
import { moveFile } from './basicOperations/moveFile.js';
import { calculateHash } from './hash/calculateHash.js';
import { printOsInfo } from './os/printOsInfo.js';
import { compressFile } from './compressDecompress/compressFile.js';
import { decompressFile } from './compressDecompress/decompressFile.js';

const userName = process.argv[2]?.split('=')[1] || 'Friend';

console.log(`Welcome to the File Manager, ${userName}!`);

let cd = os.homedir();
console.log(`You are currently in ${cd}\n`);

const rl = readline.createInterface({ input, output });

const handleUserInput = async (input) => {
  if (input.trim() === '') {
    return;
  }
  const [operation, ...args] = input.trim().split(' ');
  
  try {
    if (args.length === 0) {
      switch(operation) {
        case '.exit':
          rl.close();
          break;
        case 'up':
          cd = cd.split('\\').slice(0, -1).join('\\').length > 0 
          ? cd.split('\\').slice(0, -1).join('\\') 
          : cd;
          chdir(cd);
          break;
        case 'ls':
          await printList(cd);
          break;
        default: 
          console.warn('Invalid input');
      }
    }
    if (args.length === 1) {
      switch(operation) {
        case 'cd':
          cd = await changeDir(cd, args[0]);
          break;
        case 'cat':
          await readPrintFile(args[0]);
          break;
        case 'add':
          await createEmptyFile(args[0]);
          break;
        case 'rm':
          await deleteFile(args[0]);
          break;
        case 'hash':
          await calculateHash(args[0]);
          break;
        case 'os':
          await printOsInfo(args[0]);
          break;
        default: 
        console.warn('Invalid input');
      }
    } 
    if (args.length === 2) {
      switch(operation) {
        case 'rn':
          await renameFile(args[0], args[1]);
          break;
        case 'cp':
          await copyFile(args[0], args[1]);
          break;
        case 'mv':
          await moveFile(args[0], args[1]);
          break;
        case 'compress':
          await compressFile(args[0], args[1]);
          break;
        case 'decompress':
          await decompressFile(args[0], args[1]);
          break;
        default: 
          console.warn('Invalid input');
      }
    } else if (args.length > 2) {
      console.warn('Invalid input');
    }
  } catch (err) {
    //console.log(err);
    console.warn('Operation failed');
  } finally {
    console.log(`You are currently in ${cd}\n`);
  }
}

rl.on('line', (input) => {
  handleUserInput(input);
});

rl.on('close', () => {
  console.log(`Thank you for using File Manager, ${userName}, goodbye!\n`);
});
