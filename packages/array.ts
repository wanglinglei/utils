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
    return res;
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
export function arrayTrans(arr: any[], num: number) {
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


/**
 * @description: 判断数组中的元素是否都相等
 * @param {any} arr
 * @return {*}
 */
export function allEqualArray(arr: any[]):Boolean {
  if (isArray(arr)) {
    return arr.every((val) => val === arr[0]);
  } else {
    throw new Error("arr is not a Array");
  }
}

/**
 * @description: 获取数组中的有效值
 * @param {any} arr
 * @return {*}
 */
export function getValidArray(arr: any[]):any[] {
  if (isArray(arr)) {
    return arr.filter((item) => item||item===0);
  } else {
    throw new Error("arr is not a Array");
  }
}


/**
 * @description: 获取数组中的某个元素出现的次数
 * @param {any} arr
 * @param {any} child
 * @return {*}
 */
export function getArrayChildTimes(arr: any[], child: any): number {
  if (isArray(arr)) {
    return arr.filter((item) => item === child).length;
  } else {
    throw new Error("arr is not a Array");
  }
}
