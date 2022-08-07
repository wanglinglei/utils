import { sum, sort, arrayTrans, getArrayMax } from "../packages/array";
test("测试sum方法：10 + 20 = 20", () => {
  expect(sum(10, 10)).toBe(20);
});

describe("测试 sort 方法功能", () => {
  it("正常测试", () => {
    const data = sort([1, 3, 5, 2, 4]);
    expect(data).toEqual([1, 2, 3, 4, 5]);
  });
  it("不传值", () => {
    const data = sort();
    expect(data).toEqual([]);
  });
});

describe("测试getArrayMax", () => {
  it("正常测试", () => {
    const data = getArrayMax([1, 2, 3, 4, 5]);
    expect(data).toBe(5);
  });
});

describe("测试arrayTrans", () => {
  it("正常测试", () => {
    const data = arrayTrans([1, 2, 3, 4, 5, 6], 2);
    expect(data).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ]);
  });
});
