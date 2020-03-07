export default `
请使用 **Chrome** 浏览器。

请阅读下方文本熟悉工具使用方法，本文可直接拷贝到微信中预览。

## 1 Markdown Nice 简介

- 支持自定义样式的 Macdown 编辑器

## 2 示例文章

- <span style="color:orangered;font-weight:bold;">橙心：</span>[终于等到你，公众号排版神器](https://www.pengyunfei.top)
- <span style="color:#773098;font-weight:bold;">姹紫：</span>[JavaScript 数据结构与算法之美](https://www.pengyunfei.top)
- <span style="color:#35b378;font-weight:bold;">绿意：</span>[前端硬核面试专题之 CSS 55 问](https://www.pengyunfei.top)
- <span style="color:rgb(248,57,41);font-weight:bold;">红绯：</span>[日常 | 我用什么工具写作？](https://www.pengyunfei.top)
- <span style="color:orangered;font-weight:bold;">Wechat-Format</span>：[Markdown Nice 新特性：阿里云图床](https://www.pengyunfei.top)
- <span style="color:#0e88eb;font-weight:bold;">科技蓝</span>：[2019 前端秋季社招面试经历总结（二年多经验）](https://www.pengyunfei.top)

## 3 通用语法

### 3.1 标题

在文字写书写不同数量的\`#\`可以完成不同的标题，如下：

# 一级标题

## 二级标题

### 三级标题

### 3.2 无序列表

无序列表的使用，在符号\`-\`后加空格使用。如下：

- 无序列表 1
- 无序列表 2
- 无序列表 3

如果要控制列表的层级，则需要在符号\`-\`前使用空格。如下：

- 无序列表 1
- 无序列表 2
  - 无序列表 2.1
  - 无序列表 2.2

**由于微信原因，最多支持到二级列表**。

### 3.3 有序列表

有序列表的使用，在数字及符号\`.\`后加空格后输入内容，如下：

1. 有序列表 1
2. 有序列表 2
3. 有序列表 3

### 3.4 引用

引用的格式是在符号\`>\`后面书写文字。如下：

> 读一本好书，就是在和高尚的人谈话。 ——歌德

> 雇用制度对工人不利，但工人根本无力摆脱这个制度。 ——阮一峰

### 3.5 粗体和斜体

粗体的使用是在需要加粗的文字前后各加两个\`*\`。

而斜体的使用则是在需要斜体的文字前后各加一个\`*\`。

如果要使用粗体和斜体，那么就是在需要操作的文字前后加三个\`*\`。如下：

**这个是粗体**

*这个是斜体*

***这个是粗体加斜体***

注：由于 commonmark 标准，可能会导致加粗与想象不一致，如下

**今天天气好晴朗，**处处好风光。

### 3.6 链接

微信公众号仅支持公众号文章链接，即域名为\`https://mp.weixin.qq.com/\`的合法链接。使用方法如下所示：

### 3.7 分割线

可以在一行中用三个以上的减号来建立一个分隔线，同时需要在分隔线的上面空一行。如下：

---

### 3.8 删除线

删除线的使用，在需要删除的文字前后各使用两个\`~\`，如下：

~~这是要被删除的内容。~~

### 3.9 表格

可以使用冒号来定义表格的对齐方式，如下：

| 姓名   | 年龄 |     工作 |
| :----- | :--: | -------: |
| 小可爱 |  18  | 吃可爱多 |
| 小小勇敢 |  20  | 爬棵勇敢树 |
| 小小小机智 |  22  | 看一本机智书 |

## 4. 特殊语法

### 4.1 脚注

有人认为在[大前端时代](https://en.wikipedia.org/wiki/Front-end_web_development "Front-end web development")的背景下，移动端开发（Android、IOS）将逐步退出历史舞台。

[全栈工程师](是指掌握多种技能，并能利用多种技能独立完成产品的人。 "什么是全栈工程师")在业务开发流程中起到了至关重要的作用。

脚注内容请拉到最下面观看。

### 4.2 代码块

> 支持平台：微信代码主题仅支持微信公众号！其他主题无限制。

如果在一个行内需要引用代码，只要用反引号引起来就好，如下：

Use the \`printf()\` function.

在需要高亮的代码块的前一行及后一行使用三个反引号，同时**第一行反引号后面表示代码块所使用的语言**，如下：

\`\`\`java
// FileName: HelloWorld.java
public class HelloWorld {
  // Java 入口程序，程序从此入口
  public static void main(String[] args) {
    System.out.println("Hello,World!"); // 向控制台打印一条语句
  }
}
\`\`\`

支持以下语言种类：

\`\`\`
bash
clojure，cpp，cs，css
dart，dockerfile, diff
erlang
go，gradle，groovy
haskell
java，javascript，json，julia
kotlin
lisp，lua
makefile，markdown，matlab
objectivec
perl，php，python
r，ruby，rust
scala，shell，sql，swift
tex，typescript
verilog，vhdl
xml
yaml
\`\`\`

如果想要更换代码主题，可在上方挑选，不支持代码主题自定义。

其中**微信代码主题与微信官方一致**，有以下注意事项：

- 带行号且不换行，代码大小与官方一致
- 需要在代码块处标志语言，否则无法高亮
- 粘贴到公众号后，用鼠标点代码块内外一次，完成高亮

diff 不能同时和其他语言的高亮同时显示，且需要调整代码主题为微信代码主题以外的代码主题才能看到 diff 效果，使用效果如下:

\`\`\`diff
+ 新增项
- 删除项
\`\`\`

**其他主题不带行号，可自定义是否换行，代码大小与当前编辑器一致**

## 5 其他语法

### 5.1 HTML

支持原生 HTML 语法，请写内联样式，如下：

<span style="display:block;text-align:right;color:orangered;">橙色居右</span>
<span style="display:block;text-align:center;color:orangered;">橙色居中</span>
`