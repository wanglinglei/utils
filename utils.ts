/*
 * @Author: wanglinglei
 * @Date: 2022-04-06 22:10:47
 * @LastEditors: wanglinglei
 * @LastEditTime: 2022-04-06 22:26:26
 * @Description: file content
 */

/**
 * @description:
 * @param {*} int
 * @return {boolean}
 */
export function isObject(int) {
  return Object.prototype.toString.call(int) === "[object Object]";
}
/**
 * @description:
 * @param {*} int
 * @return {boolean}
 */
export function isArray(int) {
  if (Array.isArray) {
    return Array.isArray(int);
  } else {
    return Object.prototype.toString.call(int) === "[object Array]";
  }
}
/**
 * @description:
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
