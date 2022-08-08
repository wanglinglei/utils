/**
 * @description: 复制内容到剪切板
 * @param {string} text
 * @return {*}
 */
export function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

/**
 * @description: 获取选中的文本
 * @return {*}
 */
export function getSelectionText() {
  return window.getSelection().toString();
}

/**
 * @description: 判断是否是苹果设备
 * @return {*}
 */
export function isAppleDevice() {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform);
}

/**
 * @description: 获取url参数
 * @param {string} url
 * @return {*}
 */
export function getUrlParams(url: string) {
  let urlStr = url.split("?")[1];
  const urlSearchParams = new URLSearchParams(urlStr);
  return Object.fromEntries(urlSearchParams.entries());
}
