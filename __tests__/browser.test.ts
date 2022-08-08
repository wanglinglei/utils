import { getUrlParams } from "../packages/browser";

describe("测试 getUrlParams", () => {
  it("正常测试", () => {
    const data = getUrlParams("https://www.baidu.com/s?ie=UTF-8&wd=js");
    expect(data).toEqual({
      ie: "UTF-8",
      wd: "js",
    });
  });
});
