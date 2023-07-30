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


/**
 * @description: 开启全屏
 * @param {HTMLElement} element
 * @return {*}
 */
export function launchFullScreen(element: HTMLElement){
  if(element.requestFullscreen){
    element.requestFullscreen();
  } else if(element.mozRequestFullScreen){
    element.mozRequestFullScreen();
  } else if(element.webkitRequestFullScreen){
    element.webkitRequestFullScreen();
  }else if(element.msRequestFullScreen){
    element.msRequestFullScreen()
  }
}


/**
 * @description: 退出全屏
 * @return {*}
 */
export function exitFullScreen(){
  if (document.exitFullscreen) {
    document.exitFullscreen()
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen()
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen()
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen()
  }
}