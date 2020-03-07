export default `/*自定义样式，实时生效*/

/* 全局属性
 * 页边距 padding: 30px;
 * 全文字体 font-family: ptima-Regular;
 * 英文换行 word-break: break-all;
 */
article {
}

/* 段落，下方未标注标签参数均同此处
 * 上边距 margin-top: 5px;
 * 下边距 margin-bottom: 5px;
 * 行高 line-height: 26px;
 * 词间距 word-spacing: 3px;
 * 字间距 letter-spacing: 3px;
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
article p {
  box-sizing: border-box;
  margin-bottom: 16px;
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
  font-size: 15px;
  text-align: start;
  white-space: normal;
  text-size-adjust: auto;
  line-height: 1.75em;
}

/* 一级标题 */
article h1 {
  margin-top: -0.46em;
  margin-bottom: 0.1em;
  border-bottom: 2px solid rgb(198, 196, 196);
  box-sizing: border-box;
}

/* 一级标题内容 */
article h1 span {
  padding-top: 5px;
  padding-bottom: 5px;
  color: rgb(160, 160, 160);
  font-size: 13px;
  line-height: 2;
  box-sizing: border-box;
}

/* 一级标题修饰 请参考有实例的主题 */
article h1:after {
}

/* 二级标题 */
article h2 {
  margin: 10px auto;
  height: 40px;
  background-color: rgb(251, 251, 251);
  border-bottom: 1px solid rgb(246, 246, 246);
  overflow: hidden;
  box-sizing: border-box;
}

/* 二级标题内容 */
article h2 span {
  margin-left: -10px;
  display: inline-block;
  width: auto;
  height: 40px;
  background-color: rgb(33, 33, 34);
  border-bottom-right-radius:100px;
  color: rgb(255, 255, 255);
  padding-right: 30px;
  padding-left: 30px;
  line-height: 40px;
  font-size: 16px;
}

/* 二级标题修饰 请参考有实例的主题 */
article h2:after {
}

/* 三级标题 */
article h3 {
  margin: 20px auto 5px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

/* 三级标题内容 */
article h3 span {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 17px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 三级标题修饰 请参考有实例的主题 */
article h3:after {
}

article h4 {
  margin: 10px auto -1px;
  border-top: 1px solid rgb(221, 221, 221);
  box-sizing: border-box;
}

article h4 span {
  margin-top: -1px;
  padding-top: 6px;
  padding-right: 5px;
  padding-left: 5px;
  font-size: 16px;
  border-top: 2px solid rgb(33, 33, 34);
  display: inline-block;
  line-height: 1.1;
}

/* 无序列表整体样式
 * list-style-type: square|circle|disc;
 */
article ul {
}

/* 有序列表整体样式
 * list-style-type: upper-roman|lower-greek|lower-alpha;
 */
article ol {
}

/* 列表内容，不要设置li
 */
article li section {
  font-size: 15px;
  font-family: "Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif;
}

/* 引用
 * 左边缘颜色 border-left-color: black;
 * 背景色 background: gray;
 */
article blockquote {
  border-left-color: rgb(221, 221, 221);
  margin-top: 1.2em;
  margin-bottom: 1.2em;
  padding-right: 1em;
  padding-left: 1em;
  border-left-width: 4px;
  color: rgb(119, 119, 119);
  quotes: none;
}

/* 引用文字 */
article blockquote p {
  font-size: 15px;
  font-family: -apple-system-font, BlinkMacSystemFont, "Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", Arial, sans-serif;
  color: rgb(119, 119, 119);
  line-height: 1.75em;
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
article a {
  color: rgb(239, 112, 96);
  border-bottom: 1px solid rgb(239, 112, 96);
}

/* 加粗 */
article strong {
}

/* 斜体 */
article em {
}

/* 加粗斜体 */
article strong em {
}

/* 删除线 */
article del {
}

/* 分隔线
 * 粗细、样式和颜色
 * border-top: 1px solid #3e3e3e;
 */
article hr {
}

/* 图片
 * 宽度 width: 80%;
 * 居中 margin: 0 auto;
 * 居左 margin: 0 0;
 */
article img {
}

/* 图片描述文字 */
article figcaption {
}

/* 行内代码 */
article p code, li code {
  color: rgb(239, 112, 96);
}

/* 非微信代码块
 * 代码块不换行 display: -webkit-box !important;
 * 代码块换行 display: block;
 */
article pre code {
}

/*
 * 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
article table tr th,
article table tr td {
}

/* 脚注文字 */
article .footnote-word {
  color: #ff3502;
}

/* 脚注上标 */
article .footnote-ref {
  color: rgb(239, 112, 96);
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
article .footnotes-sep:before {
}

/* 参考资料编号 */
article .footnote-num {
}

/* 参考资料文字 */
article .footnote-item p { 
}

/* 参考资料解释 */
article .footnote-item p em {
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
article .block-equation svg {
}

/* 行内公式
 */
article .inline-equation svg {  
}`;
