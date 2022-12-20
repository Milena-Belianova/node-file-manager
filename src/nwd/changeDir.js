import { chdir, cwd } from "process";

export const changeDir = async (cd, path) => {
  chdir(cd);
  chdir(path);
  return cwd();
};