export default `/*初始化格式*/

article {
  line-height: 1.6;
  letter-spacing: .034em;
  color: rgb(63, 63, 63);
  font-size: 16px;
  word-break:all;
}

article p {
  padding-top: 23px;
  color: rgb(74,74,74);
  line-height: 1.75em;
}

/* 一级标题 */
article h1 {
  text-align:center;
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); 
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 95px;
  line-height:95px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/* 一级标题内容 */
article h1 span {
  font-size: 20px;
  color: rgb(60, 112, 198);
  border-bottom:2px solid #3C7076;
}

/* 一级标题修饰 请参考有实例的主题 */
article h1:after {
}
 
/* 二级标题 */
article h2 {
  display:block;
  text-align:center;
  background-image: url(https://my-wechat.mdnice.com/mdnice/mountain_2_20191028221337.png); 
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  margin-bottom: 10px;
}

/*二级标题伪元素*/
article h2:before {
}

/* 二级标题内容 */
article h2 span {
  text-align:center;
  display: inline-block;
  height: 38px;
  line-height: 42px;
  color: rgb(60, 112, 198);
  background-position: left center;
  background-repeat: no-repeat;
  background-attachment: initial;
  background-origin: initial;
  background-clip: initial;
  background-size: 63px;
  margin-top: 38px;
  font-size:18px;
  margin-bottom: 10px;
}

/* 三级标题 */
article h3:before {
  content: "";
  background-image:url(https://my-wechat.mdnice.com/mdnice/mountain_1_20191028221337.png);
  background-size:15px 15px;
  display: inline-block;
  width: 15px;
  height: 15px;
  line-height:15px;
  margin-bottom:-1px;
}

article h3 {
}

/* 三级标题内容 */
article h3 span {
  font-size:16px;
  font-weight:bold;
  display:inline-block;
  margin-left:8px;
  color:rgb(60,112,198);
}

/* 三级标题修饰 请参考有实例的主题 */
article h3:after {
}

/* 列表内容 */
article li {
}

/* 引用
 * 左边缘颜色 border-left-color:black;
 * 背景色 background:gray;
 */
article blockquote {
  padding: 15px 20px;
  line-height: 27px;
  background-color: rgb(239, 239, 239);
  border-left:none;
  display:block;
}

/* 引用文字 */
article blockquote p {
  padding: 0px;
  font-size:15px;
  color:rgb(89,89,89);
}

/* 链接 */
article a {
  color: rgb(60, 112, 198);
  text-decoration:none;
  border-bottom: 1px solid rgb(60, 112, 198);
}

/* 加粗 */
article strong {
  line-height: 1.75em;
  color: rgb(74,74,74);
}

/* 斜体 */
article em {
}

/* 加粗斜体 */
article strong em {
  color:rgb(248,57,41);
  letter-spacing:0.3em;
}

/* 删除线 */
article del {
}
 
/* 分割线 */
article hr {
  height:1px;
  padding:0;
  border:none;
  text-align:center;
  background-image:linear-gradient(to right,rgba(60,122,198,0),rgba(60,122,198,0.75),rgba(60,122,198,0));
}

/* 图片 */
article img {
    border-radius:4px;
    margin-bottom:25px;
}

/* 图片描述文字 */
article figcaption {
  display:block;
  font-size:12px;
  font-family:PingFangSC-Light;
}

/* 行内代码 */
article p code, li code {
	color: rgb(60, 112, 198);;
}

/* 非微信代码块
 * 代码块不换行 display:-webkit-box !important;
 * 代码块换行 display:block;
 */
article pre code {
}

/* 表格内的单元格
 * 字体大小 font-size: 16px;
 * 边框 border: 1px solid #ccc;
 * 内边距 padding: 5px 10px;
 */
article table tr th,
article table tr td {
  font-size: 14px;
}
.footnotes{
  padding-top: 8px;
}

/* 脚注文字 */
article .footnote-word {
  color: rgb(60, 112, 198);
}

/* 脚注上标 */
article .footnote-ref {
  color: rgb(60, 112, 198);
}

/* 脚注超链接样式 */
article .footnote-item em {
  color: rgb(60, 112, 198);
  font-size:13px;
  font-style:normal;
  border-bottom-color:1px dashed rgb(60, 112, 198); 
}

/* "参考资料"四个字 
 * 内容 content: "参考资料";
 */
article .footnotes-sep:before {
  background-image: none;
  background-size: none;
  display: block;
  width: auto;
  height: auto;
}

/* 参考资料编号 */
article .footnote-num {
  color: rgb(60, 112, 198);
}

/* 参考资料文字 */
article .footnote-item p {
  color: rgb(60, 112, 198);
  font-weight:bold;
}

/* 参考资料超链接 */
article .footnote-item a {
  color:rgb(60, 112, 198);
}

/* 参考资料解释 */
article .footnote-item p em {
  font-size:14px;
  font-weight:normal;
  border-bottom:1px dashed rgb(60, 112, 198);
}

/* 行间公式
 * 最大宽度 max-width: 300% !important;
 */
article .block-equation svg {
  
}

/* 行内公式*/
article .inline-equation svg {  
}`;
