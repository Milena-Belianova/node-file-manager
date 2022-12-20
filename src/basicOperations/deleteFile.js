import fs from 'fs/promises';

export const deleteFile = async (pathToFile) => {
  await fs.rm(pathToFile);
};