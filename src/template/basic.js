export default `/*默认样式，最佳实践*/

/*全局属性*/
article {
  height: 100%;
  padding: 0px 20px;
  overflow-y: auto;
  line-height: 1.7;
  background: #fff;
  background-image: linear-gradient(to bottom, #e6f6fd 0, #e6f6fd 1px, transparent 1px), linear-gradient(to right, #e6f6fd 0, #e6f6fd 1px, transparent 1px);
  background-size: 25px 25px;
  background-repeat: repeat;
}

/*段落*/
article p {
  font-size: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0;
  line-height: 30px;
  color: #585858;
}

/*标题*/
article h1,
h2,
h3,
h4,
h5,
h6 {
  // margin-top: 20px;
  // margin-bottom: 20px;
  color: #555555;
}
article h1 {
  font-size: 28px;
  text-shadow: 3px 3px 6px #e6f6fd;
}
article h2 {
  font-size: 24px;
  text-shadow: 1px 1px 2px #e6f6fd;
}
article h3 {
  font-size: 20px;
  text-shadow: 1px 1px 2px #e6f6fd;
}
article h4 {
  font-size: 18px;
  text-shadow: 1px 1px 2px #e6f6fd;
}
article h5 {
  font-size: 16px;
  text-shadow: 1px 1px 2px #e6f6fd;
}
article h6 {
  font-size: 16px;
  text-shadow: 1px 1px 2px #e6f6fd;
}

/*列表*/
article ul,
article ol {
  margin-top: 8px;
  margin-bottom: 8px;
  padding-left: 25px;
  color: black;
}
article ul {
  list-style-type: disc;
}
article ul ul {
  list-style-type: square;
}

article ol {
  list-style-type: decimal;
}

article li section {
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 26px;
  text-align: left;
  color: rgb(1,1,1); /* 只要是纯黑色微信编辑器就会把color这个属性吞掉。。。*/
  font-weight: 500;
}

/*引用*/
article blockquote {
  display: block;
  font-size: 0.9em;
  overflow: auto;
  overflow-scrolling: touch;
  border-left: 3px solid #1890ff;
  background: #e6f6fd;
  color: #6a737d;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  margin-top: 20px;
  opacity: 0.5;
}

article blockquote p {
  margin: 0px;
  line-height: 26px;
  color: #1890ff;
  background: #e6f6fd;
  border-radius: 3px;
}

article .table-of-contents a {
  border: none;
  color: black;
  font-weight: normal;
}

/*链接*/
article a {
  text-decoration: none;
  color: #1e6bb8;
  word-wrap: break-word;
  font-weight: bold;
  border-bottom: 1px solid #1e6bb8;
}

/*加粗*/
article strong {
  font-weight: bold;
  color: black;
}

/*斜体*/
article em {
  font-style: italic;
  color: black;
}

/*加粗斜体*/
article strong em {
  font-weight: bold;
  color: black;
}

/*删除线*/
article del {
  font-style: italic;
  color: black;
}

/*分隔线*/
article hr {
  height: 1px;
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-top: 1px solid black;
}

/*代码块*/
article pre {
  margin-top: 10px;
  margin-bottom: 10px;
}
article pre code {
  display: block;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  border-radius: 0px;
  font-size: 12px;
  -webkit-overflow-scrolling: touch;
}
article pre code span {
  line-height: 26px;
}

/*行内代码*/
article p code,
article li code {
  font-size: 14px;
  word-wrap: break-word;
  padding: 2px 4px;
  border-radius: 4px;
  margin: 0 2px;
  color: #1890ff;
  background-color: #e6f6fd;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
  word-break: break-all;
}

/*图片*/
article img {
  display: block;
  margin: 0 auto;
  width: auto;
  max-width: 100%;
}

/*图片*/
article figure {
  margin: 0;
  margin-top: 10px;
  margin-bottom: 10px;
}

/*图片描述文字*/
article figcaption {
  margin-top: 5px;
  text-align: center;
  color: #888;
  font-size: 14px;
}

/*表格*/
article table {
  display: table;
  text-align: left;
}
article tbody {
  border: 0;
}

article table tr {
  border: 0;
  border-top: 1px solid #ccc;
  background-color: white;
}

article table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

article table tr th,
article table tr td {
  font-size: 16px;
  border: 1px solid #ccc;
  padding: 5px 10px;
  text-align: left;
}

article table tr th {
  font-weight: bold;
  background-color: #f0f0f0;
}

/* 微信代码块 */
article .code-snippet__fix {
  word-wrap: break-word !important;
  font-size: 14px;
  margin: 10px 0;
  display: block;
  color: #333;
  position: relative;
  background-color: rgba(0,0,0,0.03);
  border: 1px solid #f0f0f0;
  border-radius: 2px;
  display: flex;
  line-height: 20px;
}
article .code-snippet__fix pre {
  margin-bottom: 10px;
  margin-top: 0px;
}
article .code-snippet__fix .code-snippet__line-index {
  counter-reset: line;
  flex-shrink: 0;
  height: 100%;
  padding: 1em;
  list-style-type: none;
  padding: 16px;
  margin: 0;
}
article .code-snippet__fix .code-snippet__line-index li {
  list-style-type: none;
  text-align: right;
  line-height: 26px;
  color: black;
  margin: 0;
}
article .code-snippet__fix .code-snippet__line-index li::before {
  min-width: 1.5em;
  text-align: right;
  left: -2.5em;
  counter-increment: line;
  content: counter(line);
  display: inline;
  color: rgba(0,0,0,0.3);
}
article .code-snippet__fix pre {
  overflow-x: auto;
  padding: 16px;
  padding-left: 0;
  white-space: normal;
  flex: 1;
  -webkit-overflow-scrolling: touch;
}
article .code-snippet__fix code {
  text-align: left;
  font-size: 14px;
  display: block;
  white-space: pre;
  display: flex;
  position: relative;
  font-family: Consolas,"Liberation Mono",Menlo,Courier,monospace;
  padding: 0px;
}

article .footnote-word {
  color: #1e6bb8;
  font-weight: bold;
}

article .footnote-ref {
  color: #1e6bb8;
  font-weight: bold;
}

article .footnote-item {
  display: flex;
}

article .footnote-num {
  display: inline;
  width: 10%; /*神奇，50px就不可以*/
  background: none;
  font-size: 80%;
  opacity: 0.6;
  line-height: 26px;
  font-family: ptima-Regular, Optima, PingFangSC-light, PingFangTC-light, 'PingFang SC', Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}

article .footnote-item p {
  display: inline;
  font-size: 14px;
  width: 90%;
  padding: 0px;
  margin: 0;
  line-height: 26px;
  color: black;
  word-break:break-all;
  width: calc(100%-50)
}

article sub, sup {
  line-height: 0;
}

article .footnotes-sep:before {
  content: "参考资料";
  display: block;
}

/* 解决公式问题 */
article .block-equation {
  display:block;
  text-align: center;
  overflow: auto;
  display: block;
  -webkit-overflow-scrolling: touch;
}

article .block-equation svg {
  max-width: 300% !important;
  -webkit-overflow-scrolling: touch;
}

article .inline-equation {
}

article .inline-equation svg {
}

article .imageflow-layer1 {
  margin: 1em auto;
  white-space: normal;
  border: 0px none;
  padding: 0px;
  overflow: hidden;
}

article .imageflow-layer2 {
  white-space: nowrap;
  width: 100%;
  overflow-x: scroll;
}

article .imageflow-layer3 {
  display: inline-block;
  word-wrap: break-word;
  white-space: normal;
  vertical-align: middle;
  width: 100%;
}

article .imageflow-img {
  display: inline-block;
}
`;
