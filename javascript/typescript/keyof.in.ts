type Pick<T, K extends keyof T> = { [P in K]: T[P] };
interface Person {
    name: string;
    age: number;
    language: string;
}
type T1 = Pick<Person, "name" | "language">;


interface Person {
    name: string;
    age: number;
    language: string;
}
type Record<K extends string, T> = { [P in K]: T };
type T1 = Record<"p1" | "p2", Person>;

enum Fruit {
    Apple,
    Banana,
    Orange
}
const FRUIT_PRICE = {
    [Fruit.Apple]: 1000,
    [Fruit.Banana]: 1500,
    [Fruit.Orange]: 2000
};
