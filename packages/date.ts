/*
 * @Author: wanglinglei
 * @Date: 2022-04-05 20:54:59
 * @LastEditors: wanglinglei 18627024279@163.com
 * @LastEditTime: 2023-03-11 12:00:24
 * @Description: file content
 * @FilePath: \utils\date.js
 */

/**
 * @description: 获取yyyymmdd
 * @param {*}
 * @return {string} string
 */
export function getYMDString(time: number | undefined): string {
  const nowTime = time ? new Date(time) : new Date();
  const y = String(nowTime.getFullYear());
  const m = String(nowTime.getMonth() + 1).padStart(2, "0");
  const d = String(nowTime.getDate()).padStart(2, "0");
  return y + m + d;
}

/**
 * @description: 处理距离指定时间描述文案
 * @param {string} startTime 计算开始时间 时间戳
 * @param {string} currentTime 计算结束时间 时间戳
 * @return {string}
 */
export function getFromNowString(
  startTime: string | number,
  currentTime: string | number | undefined
): string {
  if (!startTime) {
    return;
  }
  let baseTime = Number(startTime);
  let nowTime = currentTime ? Number(currentTime) : Date.now();
  const diffTime = Math.ceil((nowTime - baseTime) / 1000);
  if (diffTime < 60) {
    return diffTime + "秒前";
  } else {
    const diffTimeToMinutes = Math.ceil(diffTime / 60);
    if (diffTimeToMinutes < 60) {
      return diffTimeToMinutes + "分钟前";
    } else {
      const diffTimeToHour = Math.ceil(diffTimeToMinutes / 60);
      if (diffTimeToHour < 24) {
        return diffTimeToHour + "小时前";
      } else {
        const diffTimeToday = Math.ceil(diffTimeToHour / 24);
        if (diffTimeToday < 30) {
          return diffTimeToday + "天前";
        } else {
          const baseDate = new Date(baseTime);
          const y = String(baseDate.getFullYear());
          const m = String(baseDate.getMonth() + 1).padStart(2, "0");
          const d = String(baseDate.getDate()).padStart(2, "0");
          return `${y}-${m}-${d}`;
        }
      }
    }
  }
}

/**
 * @description: 获取与当前时间相隔n天的时间戳
 * @param {number} n
 * @return {number}
 */

export function getDistanceDateTime(n: number) {
  const nowDate = new Date();
  let y = nowDate.getFullYear();
  let m = nowDate.getMonth();
  let d = nowDate.getDate();
  if (d <= n) {
    if (m > 1) {
      m = m - 1;
    } else {
      y = y - 1;
      m = 12;
    }
  }
  nowDate.setDate(nowDate.getDate() - n);
  y = nowDate.getFullYear();
  m = nowDate.getMonth();
  d = nowDate.getDate();
  let s = `${y}-${m < 10 ? "0" + m : m}-${d < 10 ? "0" + d : d}`;
  return new Date(s).getTime();
}

let weekList = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];
/**
 * @description: 获取当前时间戳对应的星期
 * @param {number} n
 * @return {*}
 */
export function getWeekDate(n: number | undefined) {
  if (!n) {
    return weekList[new Date().getDay()];
  }
  return weekList[new Date(n).getDay()];
}
