import got from "got";
import fs from "fs";

const myReg = new RegExp(/[a-zA-Z0-1._-]+@[a-z\-]*(\.com|\.co\.kr)/, "gm");

const { body } = await got({
    url: "https://www.youtube.com/@dream-coding/about",
});

const emailList = new Set(body.match(myReg));
emailList.delete("yt-support-solutions-kr@google.com");
console.log([...emailList]);

fs.writeFileSync("./test.txt", myReg.exec(body).input);
