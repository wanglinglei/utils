import {
  capitalToUpperCase,
  stringFilterHtml,
  reverseString,
  sliceStringAndEllipsis,
} from "../packages/string";

describe("测试 capitalToUpperCase", () => {
  it("正常测试", () => {
    const data = capitalToUpperCase("abc");
    expect(data).toBe("Abc");
  });
});

describe("测试 reverseString", () => {
  it("正常测试", () => {
    const data = reverseString("abc");
    expect(data).toBe("cba");
  });
});

describe("测试 sliceStringAndEllipsis", () => {
  it("正常测试", () => {
    const data = sliceStringAndEllipsis("abcdefg", 6);
    expect(data).toBe("abc...");
  });
});
