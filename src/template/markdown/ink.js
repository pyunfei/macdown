export default `/* 全局属性
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
 * 对齐 text-align: left;
 * 颜色 color: #3e3e3e;
 * 字体大小 font-size: 16px;
 * 首行缩进 text-indent: 2em;
 */
article p {
  font-size: 17px;
  word-spacing: 3px;
  letter-spacing: 1px
}

/* 一级标题 */
article h1 {
}

/* 一级标题内容 */
article h1 span {
}

/* 一级标题修饰 请参考有实例的主题 */
article h1:after {
}

/* 二级标题 */
article h2 {
}

/* 二级标题内容 */
article h2 span {
  background-color: #5c5c5c;
  color: white;
  padding: 5px 15px;
  border-radius: 1px;
}

/* 二级标题修饰 请参考有实例的主题 */
article h2:after {
}

/* 三级标题 */
article h3 {
}

/* 三级标题内容 */
article h3 span {
}

/* 三级标题修饰 请参考有实例的主题 */
article h3:after {
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
}

/* 引用
* 左边缘颜色 border-left-color: black;
* 背景色 background: gray;
*/
article blockquote {
}

/* 引用文字 */
article blockquote p {
}

/* 链接 
 * border-bottom: 1px solid #009688;
 */
article a {
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
  border-top: 1px dashed #dddddd;
}

/* 图片
* 宽度 width: 80%;
* 居中 margin: 0 auto;
* 居左 margin: 0 0;
*/
article img {
  border-radius: 5px;
}

/* 图片描述文字 */
article figcaption {
}

/* 行内代码 */
article p code, li code {
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
}

/* 脚注上标 */
article .footnote-ref {
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
