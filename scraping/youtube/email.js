import got from "got";
import fs from "fs";

const url = [
    "@user-zz9jc4cr6l",
    //"@othankq",
    //"@user-up7ou1gs7h",
    //"@lionstv1982",
    //"@mastertopik",
    //"@teachercarrie",
    //"@burberry",
    //"@user-no3wc6ve6b",
    //"@zucchinitv",
    //"@oppakkaoli",
    //"@sslmowang",
    //"@dadastudio",
    //"@dontbecheated",
    //"@gogomovie",
    //"@listensomin5014",
    //"@geekble",
    //"@eshinhancard",
    //"@5minutecraftsplay_korean",
    //"@albe_84",
    //"@simsim6213",
    //"@sae__93",
    //"@letsplayyura",
    //"@redq_official",
    //"@malgum.",
    //"@annabooktube",
    //"@saehaekim",
    //"@ksj",
    //"@yousdrum",
    //"@ladybugtv_kor",
    //"@fhfryaosndl",
    //"@ppiyaksfit",
    //"@user-bh7lr7pe9g",
    //"@koreanfilm",
    //"@user-jw3fz9iy3l",
    //"@crenondorf",
    //"@04kwan",
    //"@user-ux8pf9gl3z",
    //"@ably",
    //"@jeyu",
    //"@gwarosa9405",
    //"@doramakorea",
    //"@narlifetv",
    //"@citizenpress_thetamsa",
    //"@joyfam",
    //"@heyotv",
    //"@awesomebliss",
    //"@sunnyschannel",
    //"@user-se1vr8vi3t",
    //"@user-en3lg7lv4b",
    //"@kimbuta486",
];

let index = 0;

const myReg = new RegExp(/[a-zA-Z0-1._-]+@[a-z\-]*(\.com|\.co\.kr)/, "gm");

async function getEmail(customURL) {
    console.log(customURL);
    if (!customURL) return;

    const test = await got.stream({
        url: `https://vling.net/ko/channel-rank?category=BEAUTY&sort=subscriberChange`,
        encoding: "utf-8",
    });

    test.on("data", (d) => {
        console.log(d.toString());
    });
    //const emailList = new Set(body.match(myReg));
    //emailList.delete("yt-support-solutions-kr@google.com");
    //console.log([...emailList]);

    const wr = fs.createWriteStream("./test2.txt");
    test.pipe(wr);
    //wr.write("test!", (d) => {
    //    console.log(d);
    //});
    setTimeout(() => {
        getEmail(url[index++]);
    }, 500);
}

await getEmail(url[index++]);
