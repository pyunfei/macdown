export default `/* 全局属性
* 页边距 padding:30px;
* 全文字体 font-family:optima-Regular;
* 英文换行 word-break:break-all;
color:#595959;
*/
article {
  line-height: 1.75;
  color: #595959;
  font-family: Optima-Regular, Optima, PingFangTC-Light, PingFangSC-light, PingFangTC-light;
  letter-spacing: 2px;
  background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);
  background-size: 20px 20px;
  background-position: center center;
}

/* 段落，下方未标注标签参数均同此处
* 上边距 margin-top:5px;
* 下边距 margin-bottom:5px;
* 行高 line-height:26px;
* 词间距 word-spacing:3px;
* 字间距 letter-spacing:3px;
* 对齐 text-align:left;
* 颜色 color:#3e3e3e;
* 字体大小 font-size:16px;
* 首行缩进 text-indent:2em;
*/
article p {
  color: #595959;
  margin: 10px 0px;
  letter-spacing: 2px;
  font-size: 14px;
  word-spacing: 2px;
}

/* 一级标题 */
article h1 {
  font-size: 25px;
}

/* 一级标题内容 */
article h1 span {
  display: inline-block;
  font-weight: bold;
  color: #595959;
}

/* 一级标题修饰 请参考有实例的主题 */
article h1:after {}

/* 二级标题 */
article h2 {
  text-align: left;
  margin: 20px 10px 0px 0px;
}

/* 二级标题内容 */
article h2 span {
  font-size: 18px;
  font-weight: bold;
  display: inline-block;
  padding-left: 10px;
  border-left: 5px solid #DEC6FB;
  color: #595959;

}

/* 二级标题修饰 请参考有实例的主题 */
article h2:after {}

/* 三级标题 */
article h3 {
  font-size: 16px;
  font-weight: bold;
  text-align: center;
}

/* 三级标题内容 */
article h3 span {
  border-bottom: 2px solid #DEC6FB;
  color: #595959;
}

/* 三级标题修饰 请参考有实例的主题 */
article h3:after {}

/* 无序列表整体样式
* list-style-type: square|circle|disc;
*/
article ul {
  font-size: 15px; /*神奇逻辑，必须比li section的字体大才会在二级中生效*/
  color: #595959;
  list-style-type: circle;
}


/* 有序列表整体样式
* list-style-type: upper-roman|lower-greek|lower-alpha;
*/
article ol {
  font-size: 15px;
  color: #595959;
}

/* 列表内容，不要设置li
*/
article li section {
  font-size: 14px;
  font-weight: normal;
  color: #595959;
}

/* 引用
* 左边缘颜色 border-left-color:black;
* 背景色 background:gray;
*/
article blockquote::before {
  content: "❝";
  /*   color: #d9b8fa;*/
  color: #DEC6FB;
  font-size: 34px;
  line-height: 1;
  font-weight: 700;
}

article blockquote {
  text-size-adjust: 100%;
  line-height: 1.55em;
  font-weight: 400;
  border-radius: 6px;
  color: #595959;
  font-style: normal;
  text-align: left;
  box-sizing: inherit;
  border-left: none;
  border: 1px solid #DEC6FB;
  background: #F6EEFF;

}

article blockquote p {
  color: #595959;
}

article blockquote::after {
  content: "❞";
  float: right;
  /*   color: #d9b8fa; */
  color: #DEC6FB;
}

/* 链接 
* border-bottom: 1px solid #009688;
*/
article a {
  color: #664D9D;
  font-weight: normal;
  border-bottom: 1px solid #664D9D;
}

article strong::before {
  content: '「';
}

/* 加粗 */
article strong {
  color: #595959;
  font-weight: bold;
}

article strong::after {
  content: '」';
}

/* 斜体 */
article em {
  font-style: normal;
  color: #595959;
  background: #F6EEFF;
}

/* 加粗斜体 */
article strong em {
  color: #595959;
}

/* 删除线 */
article del {
  color: #595959;
}

/* 分隔线
* 粗细、样式和颜色
* border-top:1px solid #3e3e3e;
*/
article hr {
  height: 1px;
  padding: 0;
  border: none;
  border-top: 2px solid #d9b8fa;
}

/* 图片
* 宽度 width:80%;
* 居中 margin:0 auto;
* 居左 margin:0 0;
*/
article img {
  border-radius: 6px;
  display: block;
  margin: 20px auto;
  height: 100%;
  object-fit: contain;
}

/* 图片描述文字 */
article figcaption {
  display: block;
  font-size: 13px;
  color: #595959;
}

/* 行内代码 */
article p code,
li code {
  color: #595959;
}

/* 非微信代码块
* 代码块不换行 display:-webkit-box !important;
* 代码块换行 display:block;
*/
article .code-snippet__fix {
  background: #f7f7f7;
  border-radius: 2px;
}

article pre code {
  /* background: #f7f7f7; */
}

/*
* 表格内的单元格
* 字体大小 font-size: 16px;
* 边框 border: 1px solid #ccc;
* 内边距 padding: 5px 10px;
*/
article table tr th,
article table tr td {
  font-size: 14px;
  color: #595959;
}

article .footnotes {
  background: #F6EEFF;
  padding: 20px 20px 20px 20px;
  font-size: 14px;
  border: 0.8px solid #DEC6FB;
  border-radius: 6px;
  border: 1px solid #DEC6FB;
}

/* 脚注文字 */
article .footnote-word {
  font-weight: normal;
  color: #595959;
}

/* 脚注上标 */
article .footnote-ref {
  font-weight: normal;
  color: #595959;
}

/*脚注链接样式*/
article .footnote-item em {
  background: #F6EEFF;
  font-size: 14px;
  color: #595959;
  display: block;
}

/* "参考资料"四个字 
* 内容 content: "参考资料";
*/
article .footnotes-sep:before {
  content: 'Reference';
  color: #595959;
  letter-spacing: 1px;
  border-bottom: 2px solid #DEC6FB;
  display: inline;
  background: linear-gradient(white 60%, #F6EEFF 40%);
  font-size: 20px;
}

/* 参考资料编号 */
article .footnote-num {}

/* 参考资料文字 */
article .footnote-item p {
  color: #595959;
  font-weight: bold;
}

/* 参考资料解释 */
article .footnote-item p em {
  font-weight: normal;
}

/* 行间公式
* 最大宽度 max-width: 300% !important;
*/
article .block-equation svg {}

/* 行内公式
*/
article .inline-equation svg {}`;
