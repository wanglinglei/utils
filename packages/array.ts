import { isArray, isObject } from "./utils";
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
export function allEqualArray(arr: any[]): Boolean {
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
export function getValidArray(arr: any[]): any[] {
  if (isArray(arr)) {
    return arr.filter((item) => item || item === 0);
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

/**
 * @description: 混淆数组
 * @param {any} arr
 * @return {*}
 */
export function confuseArray(arr: any[]): any[] {
  const res = arr.slice().sort(() => Math.random() - .5);
  return res;
}


/**
 * @description: 数组模糊查询
 * @param {any} arr     // 输入数组
 * @param {*} keyWord   // 查询的关键字
 * @param {*} attribute // 如果元素是对象 需要传入匹配的属性
 * @return {*}
 */
export function fuzzyArray(arr: any[], keyWord: string, attribute?: string): any[] {
  if (arr.length) {
    const itemType = isObject(arr[0]);
    if (itemType) {
      // 是对象 attribute 检验
      if (attribute) {
        const reg = new RegExp(keyWord)
        const list = []
        for (let i = 0; i < arr.length; i++) {
          if (reg.test(arr[i][attribute])) {
            list.push(arr[i])
          }
        }
        return list
      } else {
        console.warn('attribute is required');
        return arr;
      }
    } else {
      // 数组元素不是对象 直接匹配元素值
      const reg = new RegExp(keyWord)
      const list = []
      for (let i = 0; i < arr.length; i++) {
        if (reg.test(arr[i])) {
          list.push(arr[i])
        }
      }
      return list
    }
  } else {
    return []
  }
}


/**
 * @description: 获取数组中所有真值
 * @param {Array} arr
 * @return {Array}
 */
export function getTruthyArray(arr: Array<any>): Array<any> {
  return arr.filter(Boolean);
}