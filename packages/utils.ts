
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
export function isArray(int): int is any[]  {
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

/**
 * @description: 获取数据类型
 * @param {any} obj
 * @return {*}
 */
export function getType(obj: any): string {
  return Object.prototype.toString.call(obj).slice(8,-1).toLowerCase();
}


/**
 * @description: 生成随机颜色
 * @return {*}
 */
export function randomColor():string {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}

/**
 * @description: sleep 函数
 * @param {number} time
 * @return {*}
 */
export function jsSleep(time:number=1000){
  return new Promise((resolve, reject) =>{
    setTimeout(()=>{
      resolve(time);
    },time)
  })
}