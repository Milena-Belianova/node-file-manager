import fs from 'fs/promises';

export const createEmptyFile = async (fileName) => {
  let file;
  try {
    file = await fs.open(fileName, 'wx+');
  } catch (err) {
    console.warn('File already exists');
  } finally {
    await file.close();
  }
};