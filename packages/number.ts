/**
 * @description: 数字千分位分隔
 * @param {number} int
 * @return {*}
 */
export function thousandSplit(int:number|string):string {
  return Number(int).toLocaleString('zh-CN');
}


/**
 * @description: 生成范围内随机数
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export function randomNumber(min:number, max:number):number {
  return Math.floor(Math.random() * (max - min+1)) + min;
}

