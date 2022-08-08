import { getYMDString, getFromNowString } from "../packages/date";

describe("测试 getYMDString", () => {
  it("正常测试", () => {
    const data = getYMDString(1659964827076);
    expect(data).toBe("20220808");
  });
});

describe("测试 getFromNowString", () => {
  it("正常测试 -秒前", () => {
    const data = getFromNowString(1659964827076, 1659964828076);
    expect(data).toBe("1秒前");
  });
  it("正常测试 -分钟前", () => {
    const data = getFromNowString(1659964827076, 1659964928076);
    expect(data).toBe("2分钟前");
  });
  it("正常测试 -小时前", () => {
    const data = getFromNowString(1659964827076, 1659972027076);
    expect(data).toBe("2小时前");
  });
  it("正常测试 -天前", () => {
    const data = getFromNowString(1659964827076, 1660396827076);
    expect(data).toBe("5天前");
  });
  it("正常测试 -日期", () => {
    const data = getFromNowString(1659964827076, 1669994828076);
    expect(data).toBe("2022-08-08");
  });
});
