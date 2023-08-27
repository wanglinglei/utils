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
 | 函数名 | 函数描述| 
 |:----:|:----|
|getArrayMax| 获取数组中的最大值
|arrayTrans| 数组转二位数组
|allEqualArray| 判断数组中的元素是否都相等
|getValidArray| 获取数组中的有效值
|getArrayChildTimes| 获取数组中的某个元素出现的次数
#### browser.ts 
 | 函数名 | 函数描述| 
 |:----:|:----|
|copyToClipboard| 复制内容到剪切板
|getSelectionText| 获取选中的文本
|isAppleDevice| 判断是否是苹果设备
|getUrlParams| 获取url参数
#### date.ts 
 | 函数名 | 函数描述| 
 |:----:|:----|
|getYMDString| 获取yyyymmdd
|getFromNowString| 处理距离指定时间描述文案
|getDistanceDateTime| 获取与当前时间相隔n天的时间戳
|getWeekDate| 获取当前时间戳对应的星期
#### function.ts 
 | 函数名 | 函数描述| 
 |:----:|:----|
|catchFunctionError| 捕获函数错误
|onceCall| 只执行一次的函数
#### string.ts 
 | 函数名 | 函数描述| 
 |:----:|:----|
|testString| 异常处理
|capitalToUpperCase| 字符串首字母转大写
|reverseString| 字符串翻转
|randomString| 随机字符串
|sliceStringAndEllipsis| 字符串指定位置裁剪拼接省略号
|stringFilterHtml| 去除字符串中的HTML标签
|trimString| 去处字符串空格
|humpStingToStrikethrough| 字符串驼峰转中划线
#### utils.ts 
 | 函数名 | 函数描述| 
 |:----:|:----|
|isString| 判断是否是字符串
|isObject| 判断是对象
|isArray| 判断是否是数组
|isEmpty| 判断是否为空
|filterNumber|数字千分位分隔
|deepClone| 深拷贝