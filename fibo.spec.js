const fibo= require("./fibo");
test("Returns 0 When value is 0", () => {
    expect(fibo(0)).toBe(0);
});

test("Returns 3 When value is 5", () => {
    expect(fibo(1)).toBe(1);
});

test("Returns 3 When value is 5", () => {
    expect(fibo(0)).toBe(3);
});