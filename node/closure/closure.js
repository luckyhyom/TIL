const toggle = (function (fn) {
    let isShow = true;
    return function () {
        if (isShow) fn();
        isShow = !isShow;
    };
});
const a = toggle(() => { console.log(0) });
a();
a();
a();
a();

/**
 * isShow 라는 변수에 접근할 수 없으므로 안전하다. (전역으로 두면 다른 곳에서 접근이 가능하다.)
 * 
 * 버튼같은 곳에도 적용 가능
 * btn.onClick = toggle(() => { console.log(0) });
 * 
 * https://poiemaweb.com/js-closure
 */