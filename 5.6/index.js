const fs = require("fs");
const InnodbPage = require("./parse/Page");
const KaitaiStream = require('kaitai-struct/KaitaiStream');

const fileContent = fs.readFileSync("page_0.ibd");
const parsed = new InnodbPage(new KaitaiStream(fileContent));
console.log(parsed);
