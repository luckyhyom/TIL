const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const body = { category: [] };

const myURL = new URL("http://localhost:3000");

let commands = {
    pathname: (path) => {
        myURL.pathname = path;
        rl.prompt();
    },

    search: (search) => {
        myURL.search = search;
        rl.prompt();
    },

    printURL: () => {
        console.log(myURL);
    },

    inputCategory: (cate) => {
        body.category.push(...cate.split(","));
        console.log(body);
    },

    clearCategory: () => {
        body.category = [];
        console.log(body);
    },

    exec: () => {
        console.log(`
            fetch(${myURL.href})
                .then((res) => res.json())
                .then((res) => console.log(res));
        `);
    },

    help: () => {
        console.log(`
            > pathname /a/b/c
            > search  ?title=hiphop
            > printURL
            > inputCategory game,music,video
            > exec: fetch.. ${myURL.href}
            > close
        `);
    },

    close: () => {
        rl.close();
    },
};

commands["help"]();

rl.on("line", (input) => {
    const inputs = input.split(" ");
    const command = inputs[0];
    const arg = inputs[1];

    if (command in commands) {
        commands[command](arg);
    } else {
        console.log("command -> help");
    }
    rl.prompt();
});
