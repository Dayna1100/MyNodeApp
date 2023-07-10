const { readFile, writeFile } = require("node:fs/promises");

async function readMessage() {
    const message = await readFile("./message-archive.txt", "utf8")
    console.log (message)
}
 readMessage()