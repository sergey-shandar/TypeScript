// @strict: true
const a = () => ({
    a: 12,
    b: 11
});

declare function f(arg: {a: number}): void;
f(a());