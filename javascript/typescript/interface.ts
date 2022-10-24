// 클래스의 인터페이스
interface GetText {
    prop?: number;
    fn(name: string): string;
}

class Texts implements GetText {
    prop = 2;
    constructor() {
    }
    fn(name: string): string {
        return ''
    };
}

// 함수로 정의
interface Test {
    prop?: number;
    (name: string): string;
}

const a: Test = (name: string) => {
    a.prop = 1;
    return ''
}