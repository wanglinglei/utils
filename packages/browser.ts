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
    // @ts-ignore
  } else if(element.mozRequestFullScreen){
    //@ts-ignore
    element.mozRequestFullScreen();
    // @ts-ignore
  } else if(element.webkitRequestFullScreen){
    // @ts-ignore
    element.webkitRequestFullScreen();
    // @ts-ignore
  }else if(element.msRequestFullScreen){
    // @ts-ignore
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
    // @ts-ignore
  } else if (document.msExitFullscreen) {
    // @ts-ignore
    document.msExitFullscreen()
    // @ts-ignore
  } else if (document.mozCancelFullScreen) {
    // @ts-ignore
    document.mozCancelFullScreen()
    // @ts-ignore
  } else if (document.webkitExitFullscreen) {
    // @ts-ignore
    document.webkitExitFullscreen()
  }
}


/**
 * @description: 获取当前浏览器类型
 * @return {*}
 */
export function getExplorer(){
  const ua = window.navigator.userAgent;
  const isExplorer=(exp)=>{
    return ua.indexOf(exp)>-1;
  }
  if(isExplorer('MSIE')){
    return 'IE'
  }else if (isExplorer('Firefox')){
    return 'Firefox'
  }else if (isExplorer('Chrome')){
    return 'Chrome'
  } else if(isExplorer('Opera')){
    return 'Opera'
  } else if (isExplorer('Safari')){
    return 'Safari'
  }
}

/**
 * @description: js 等待函数
 * @param {number} time
 * @return {*}
 */
export function jsSleep(time: number){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(true)
    },time);
  })
}