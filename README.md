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