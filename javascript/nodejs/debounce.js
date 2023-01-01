// parameter is just medium
const debounce = (func, delay) => {
    let timer = null;
    return function () {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => func(...arguments), delay); // args are factors
    };
};

const search = debounce(console.log, 1000);
search("오");
search("오늘은");
search("오늘은 기분");
search("오늘은 기분 좋은");
search("오늘은 기분 좋은 날");
