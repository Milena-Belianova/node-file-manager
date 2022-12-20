import fs from 'fs/promises';

export const renameFile = async (pathToFile, newFileName) => {
  await fs.rename(pathToFile, newFileName);
};