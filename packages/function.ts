
// my bind
Function.prototype.myBind = function (targetThis, ...params) {
  // 当前调用的函数
  const thisFn = this;
  let funcForBind = function (...otherParams) {
    const isNew = this instanceof funcForBind;
    const thisArg = isNew ? this : targetThis;
    return thisFn.call(thisArg, ...params,...otherParams)
  }
  funcForBind.prototype = Object.create(thisFn.prototype);
  return funcForBind
}

// my call

Function.prototype.myCall = function (targetThis, ...params) {
  if (targetThis === null || targetThis === undefined) {
    targetThis = window;
  }
  const method = Symbol('method');
  targetThis[method] = this;
  const res = targetThis[method](...params);
  delete targetThis[method];
  return res;
}

// my apply

Function.prototype.myApply = function (targetThis, arr) {
  if (targetThis === null || targetThis === undefined) {
    targetThis = window;
  }
  const method = Symbol('method');
  targetThis[method] = this;
  const res = targetThis[method](...arr);
  delete targetThis[method];
  return res;
}

/**
 * @description: 捕获函数错误
 * @param {Function} fn
 * @param {array} args
 * @return {*}
 */
export function catchFunctionError(fn: Function, ...args) {
  try {
    return fn(...args);
  } catch (error) {
    return error instanceof Error? error : new Error(error);
  }
}


/**
 * @description: 只执行一次的函数
 * @param {Function} fn
 * @return {*}
 */
export function onceCall(fn: Function) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
}