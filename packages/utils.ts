/*
 * @Author: wanglinglei
 * @Date: 2022-04-06 22:10:47
 * @LastEditors: wanglinglei 18627024279@163.com
 * @LastEditTime: 2023-03-11 12:06:58
 * @Description: file content
 */

/**
 * @description: 判断是否是字符串
 * @param {*} int
 * @return {*}
 */
export function isString(int): int is String {
  return typeof int === "string";
}

/**
 * @description: 判断是对象
 * @param {*} int
 * @return {boolean}
 */
export function isObject(int): int is Object {
  return Object.prototype.toString.call(int) === "[object Object]";
}
/**
 * @description: 判断是否是数组
 * @param {*} int
 * @return {boolean}
 */
export function isArray(int): int is [] {
  if (Array.isArray) {
    return Array.isArray(int);
  } else {
    return Object.prototype.toString.call(int) === "[object Array]";
  }
}
/**
 * @description: 判断是否为空
 * @param {*} int
 * @return {boolean}
 */
export function isEmpty(int) {
  if (isObject(int)) {
    return Object.keys(int).length > 0;
  } else if (isArray(int)) {
    return int.length > 0;
  } else {
    return int === 0 ? false : !int;
  }
}

/**
 * @description 数字千分位分隔
 * @param int
 * @returns {string}
 */

export function filterNumber(int: string | number): string {
  let intNumber = Number(int);
  return intNumber.toLocaleString();
}

/**
 * @description: 深拷贝
 * @param {*} obj
 * @return {*}
 */
export function deepClone(obj) {
  var objClone = isArray(obj) ? [] : {};
  if (obj && typeof obj === "object") {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (obj[key] && typeof obj[key] === "object") {
          objClone[key] = deepClone(obj[key]);
        } else {
          objClone[key] = obj[key];
        }
      }
    }
  }
  return objClone;
}
