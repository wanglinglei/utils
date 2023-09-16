/**
 * @description: 数字千分位分隔
 * @param {number} int
 * @return {*}
 */
export function thousandSplit(int:number|string):string {
  return Number(int).toLocaleString('zh-CN');
}


/**
 * @description: 金额格式化正则
 * @param {number} int
 * @return {*}
 */
export function formatMoney(int:number|string):string{
  const string=String(int);
  return string.replace(new RegExp(`(?!^)(?=(\\d{3})+${string.includes('.') ? '\\.' : '$'})`, 'g'), ',')
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

