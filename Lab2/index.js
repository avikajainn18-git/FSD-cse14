import { writeFile, readFile, appendFile } from "fs/promises";
// await writeFile('stud.txt', 'Ravikant Singhla \nRollno: 26');
// console.log("file written");
// const data = await readFile("stud.txt", 'utf-8');
// console.log(`file contents: ${data}`);
const addContent = async (fname, content) => {
  await writeFile(fname, content);
  console.log(`${content} written in file ${fname}`);
};
const readContent = async (fname) => {
  const data = await readFile(fname);
  return data;
};
const updateContent = async (fname, content) => {
  await appendFile(fname, content);
  console.log(`${content} added in file ${fname}`);
};

await addContent("notes.txt", "FS is easy in JS");
await updateContent("notes.txt", "\nFS is veryyy easy in JS");
console.log("Contents\n", readContent("notes.txt"));
