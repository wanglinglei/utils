import { isArray } from "./utils";
/**
 * @description: 获取数组中的最大值
 * @param {number} arr
 * @return {*}
 */
export function getArrayMax(arr: number[]) {
  if (isArray(arr)) {
    let res;
    arr.forEach((ele) => {
      if (res === undefined) {
        res = ele;
      } else {
        res = ele > res ? ele : res;
      }
    });
  } else {
    throw new Error("arr is not a Array");
  }
}
/**
 * @description: 数组转二位数组
 * @param {*} arr 原始数组
 * @param {number} num 每组个数
 * @return {*}
 */
export function arrayTrans(arr: [], num: number) {
  if (isArray(arr)) {
    let res = [];
    arr.forEach((item, index) => {
      const page = Math.floor(index / num); // 计算该元素为第几个素组内
      if (!res[page]) {
        // 判断是否存在
        res[page] = [];
      }
      res[page].push(item);
    });
    return res;
  } else {
    throw new Error("arr is not a Array");
  }
}
