//const axios = require('axios').default;

//axios.post('http://localhost:3000/api/v1/auth/sign-in', {
//    "phone": "01012341234",
//    "password": "abcd1234@2"
//})
//    .then(function (response) {
//        console.log(response.data, '??');
//    })
//    .catch(function (error, a) {
//        console.log(error.response.data, '????!!');

//    });


const a = () => new Promise((res, rej) => {
    setTimeout(() => {
        console.log('test');
        res('1')
    }, 1000)
});

Number

async function test() {
    const s = await Promise.race([
        a(),
        new Promise((res) => {
            setTimeout(() => {
                res('2')
                console.log(2);
            }, 500)
        }),
    ])

    console.log(s);
}

test()


