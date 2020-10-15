# commit message

Header type(scope) subject

type（必需）为以下 7 种
feat：新功能（feature）
fix：修补 bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动

scope（可选）用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
subject（必需）是 commit 目的的简短描述，不超过 50 个字符。

Body（必需）部分是对本次 commit 的详细描述，可以分成多行

Footer（可选） 只用于两种情况。
（1）不兼容变动
如果当前代码与上一个版本不兼容，则 Footer 部分以 BREAKING CHANGE 开头，后面是对变动的描述、以及变动理由和迁移方法。
（2）关联 Issue, 关闭 Issue
example: feat: (\$compile) 添加了分享功能

给每篇博文添加了分享功能

- 添加分享到微博功能
- 添加分享到微信功能
- 添加分享到朋友圈功能

Issue #1, #2
Close #1

用 Commitizen 生成符合格式的 Commit message
项目根目录运行命令
npm install -g commitizen
npm run commitizen
每次提交的时候用 git cz
