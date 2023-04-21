import got from "got";

const url = await got({ url: "http://localhost:3001/custom-url" }).json();

let index = 0;

const myReg = new RegExp(/[a-zA-Z0-1._-]+@[a-z\-]*(\.com|\.co\.kr)/, "gm");

async function getEmail(customURL) {
    try {
        console.log(customURL);
        if (!customURL) return;

        const { body } = await got({
            url: `https://www.youtube.com/${customURL}/about`,
        });

        const emailList = new Set(body.match(myReg));
        emailList.delete("yt-support-solutions-kr@google.com");
        console.log([...emailList].toString());

        await got
            .post(`http://localhost:3001/update-channels-email/${customURL}`, {
                json: {
                    email: [...emailList].toString(),
                },
            })
            .json();

        setTimeout(() => {
            getEmail(url[index++]);
        }, 500);
    } catch (error) {
        console.log(error);
        setTimeout(() => {
            getEmail(url[index++]);
        }, 500);
    }
}

//await getEmail(url[index++]);
