import { readdir } from 'fs/promises';

const sortObjByName = (a , b) => {
  let x = a.name.toLowerCase();
  let y = b.name.toLowerCase();
  if (x < y) {return -1;}
  if (x > y) {return 1;}
  return 0;
}

export const printList = async (cd) => {
  const dirEntries = await readdir(cd, {withFileTypes: true});

  const onlyDirs = dirEntries
    .filter((de) => de.isDirectory())
    .sort((a, b) => sortObjByName(a, b))
    .map((de => ({name: de.name, type: 'directory'})));

  const onlyFiles = dirEntries
    .filter((f) => f.isFile())
    .sort((a, b) => sortObjByName(a, b))
    .map((f => ({name: f.name, type: 'file'})));

  const tableData = [...onlyDirs, ...onlyFiles];
  console.table(tableData);
};
