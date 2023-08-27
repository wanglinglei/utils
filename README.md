## 常用工具库
## Authors

- [@汪令镭](https://github.com/wanglinglei/wanglinglei)


### git commit规范
    *git commit-m "type:message"*
**commit type 类型**
  - feat（feature，产品新功能，通常是能够让用户觉察到的变化，小到文案或样式修改）
  - fix（bug fix，修复 bug）
  - docs（documentation，更新文档或注释）
  - style（code formatting, missing semi colons, … 代码格式调整，对逻辑无影响：比如为按照 eslint 或团队风格修改代码格式。注意不是 UI 变更）
  - refactor（重构：不影响现有功能或添加功能。比如文件、变量重命名、代码抽象为函数，消除魔法数字等）
  - test（when adding missing tests 单测相关变更）
  - chore（杂项：其他无法归类的变更，比如代码合并）
  - perf （性能提升变更）
  - ci（持续集成脚本相关变更）
  - build（代码构建相关变更：比如修复部署时的构建问题、构建脚本 webpack 或 gulp 相关变更）
  - temp（临时代码：不计入 CHANGELOG，比如必须部署到某种环境才能测试的变更。如测试真机上 transparent title 启动参数是否设置成功）


### changeLog规范
    *version 1.0*
    *-feat xxxx*
    *-fix xxxx*
    *-docs xxxx*



### jest 单元测试
```
// 单元测试
npm run test
// 单元测试 生成测试报告
npm run test:coverage
```
### 工具函数列表
#### array.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|getArrayMax| 获取数组中的最大值|arr: number[]|--|
|arrayTrans| 数组转二位数组|arr: any[], num: number|--|
|allEqualArray| 判断数组中的元素是否都相等|arr: any[]|Boolean|
|getValidArray| 获取数组中的有效值|arr: any[]|any[]|
|getArrayChildTimes| 获取数组中的某个元素出现的次数|arr: any[], child: any|number|
#### browser.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|copyToClipboard| 复制内容到剪切板|text: string|--|
|getSelectionText| 获取选中的文本||--|
|isAppleDevice| 判断是否是苹果设备||--|
|getUrlParams| 获取url参数|url: string|--|
#### date.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|getYMDString| 获取yyyymmdd|time: number|string|
|getFromNowString| 处理距离指定时间描述文案|startTime: string / number, currentTime: string / number|string|
|getDistanceDateTime| 获取与当前时间相隔n天的时间戳|n: number|--|
|getWeekDate| 获取当前时间戳对应的星期|n: number|--|
#### function.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|catchFunctionError| 捕获函数错误|fn: Function, args: any[]|--|
|onceCall| 只执行一次的函数|fn: Function|--|
#### string.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|testString| 异常处理|str: any|--|
|capitalToUpperCase| 字符串首字母转大写|str: string|--|
|reverseString| 字符串翻转|str: string|--|
|randomString| 随机字符串||--|
|sliceStringAndEllipsis| 字符串指定位置裁剪拼接省略号|str: string, length: number|--|
|stringFilterHtml| 去除字符串中的HTML标签|str: string|--|
|trimString| 去处字符串空格|str: string, type: 1 / 2 / 3 / 4|string|
|humpStingToStrikethrough| 字符串驼峰转中划线|str: string|string|
#### utils.ts 
 | 函数名 | 函数描述|入参|返回值| 
 |:----:|:----|:----:|:----:|
|isString| 判断是否是字符串|int: any|int is String|
|isObject| 判断是对象|int: any|int is Object|
|isArray| 判断是否是数组|int: any|int is any[]|
|isEmpty| 判断是否为空|int: any|--|
|filterNumber|数字千分位分隔|int: string / number|string|
|deepClone| 深拷贝|obj: any|--|
