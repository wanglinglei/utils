import { isString } from "./utils";
/**
 * @description: 异常处理
 * @param {*} str
 * @return {*}
 */
export function testString(str) {
  if (!isString(str)) {
    throw new Error(`${str} is not string`);
  }
}

/**
 * @description: 字符串首字母转大写
 * @param {string} str
 * @return {*}
 */
export function capitalToUpperCase(str: string) {
  testString(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @description: 字符串翻转
 * @param {string} str
 * @return {*}
 */
export function reverseString(str: string) {
  testString(str);
  return str.split("").reverse().join("");
}

/**
 * @description: 随机字符串
 * @return {*}
 */
export function randomString() {
  return Math.random().toString(36).slice(2);
}

/**
 * @description: 字符串指定位置裁剪拼接省略号
 * @param {string} str
 * @param {number} length
 * @return {*}
 */
export function sliceStringAndEllipsis(str: string, length: number) {
  testString(str);
  return str.length < length ? str : `${str.slice(0, length - 3)}...`;
}

/**
 * @description: 去除字符串中的HTML标签
 * @param {string} str
 * @return {*}
 */
export function stringFilterHtml(str: string) {
  testString(str);
  return (
    new DOMParser().parseFromString(str, "text/html").body.textContent || ""
  );
}

/**
 * @description: 去处字符串空格
 * @param {string} str
 * @param {1} type 1-所有空格 2-前后空格 3-前空格 4-后空格
 * @return {*}
 */
export function trimString(str: string, type: 1 | 2 | 3 | 4): string {
  testString(str);
  switch (type) {
    case 1:
      return str.replace(/\s+/g, "");
    case 2:
      return str.replace(/(^\s*)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s*)/g, "");
    case 4:
      return str.replace(/(\s*$)/g, "");
    default:
      return str;
  }
}
