import fs from "fs";

export const readPrintFile = (path) =>
  new Promise((resolve, reject) => {
    const readableStream = fs.createReadStream(path, "utf8");

    readableStream.on("error", () => {
      reject();
    });

    readableStream.on("end", () => {
      resolve();
    });

    readableStream.on("data", (chunk) => {
      resolve(chunk);
    });
  });
