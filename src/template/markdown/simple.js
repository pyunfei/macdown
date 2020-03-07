export default `/* 根据该字体大小，统一调整文章整体大小 */
/* 间距，其他字体，代码块以及注脚 */
/* 不会控制微信代码块 */
article {
  font-size: 16px;
}

/* 颜色管理 */
article a {
  color: #3e64ff;
}
article p code {
  color: #e46918;
  background-color: #efefef;
}
article .footnote-word,
article .footnote-ref {
  color: #004a7c;
}
article .footnote-item em {
  color: #004a7c;
}

/* 统一间距 */
article p,
article section,
article h1,
article h2,
article h3,
article h4,
article h5,
article h6,
article pre,
article figure,
article ul,
article hr {
  margin: 1em 0;
  color: #333;
}

article {
  margin-top: -1em;
  color: #333;
  padding-top: 0;
  padding-bottom: 0;
  font-family: -apple-system,system-ui,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Arial,sans-serif;
}
article * {
  line-height: 1.6 !important;
}

article hr {
  border-top: 1px solid #dfe2e5
}

/* 标题调整 */
article h1 {
  font-size: 1.4em;
}
article h2 {
  font-size: 1.3em;
}
article h1,
article h2 {
  padding-bottom: .3em;
  border-bottom: 1px solid #dfe2e5;
}
article h3 {
  font-size: 1.2em;
}
article h4 {
  font-size: 1.1em;
}
article h5 {
  font-size: 1em;
}
article h6 {
  font-size: 1em;
}

/* 段落调整 */
article p {
  padding: 0;
  font-size: inherit;
  color: #333;
}
article blockquote {
  background: none;
  border-left: 4px solid #ddd;
  padding: 0 1em;
}
article blockquote p {
  margin: 0;
  color: #666;
}
article strong {
  color: #333;
}

article a {
  font-weight: normal;
  border-color: inherit;
}

/* 列表调整 */
article li section {
  margin-top: .3em;
  margin-bottom: .3em;
  font-weight: normal;
}
article li ul {
  margin: 0;
}

/* 代码块调整 */
article pre {
  border-radius: 4px;
}
article section pre {
  margin: 0;
  padding-top: 0;
  padding-bottom: 0;
}
article p code {
  font-size: .875em;
}
article pre code {
  font-size: .875em;
}

article figure img {
  max-width: 100%;
  width: auto;
  margin: 0 auto;
}

/* table 调整 */
article table tr th,
article table tr td {
  font-size: 1em;
}

/* 注脚调整 */
article .footnotes-sep {
  font-size: 1.3em;
}
article .footnote-item {
  margin: .4em 0;
}
article .footnote-item * {
  line-height: 1.4 !important;
}
article .footnote-item p {
  margin: 0;
  font-size: .9em;
}
article .footnote-item em {
  font-style: normal;
  padding-left: .5em;
}
article .footnote-item span {
  flex: 0 0 1.5em;
  margin-right: 10px;
  font-size: .9em;
}

/* 微信默认样式修复 */
/* 微信代码块固定为 14px */
article pre.code-snippet__js {
  padding: 16px 0;
}

article pre.code-snippet__js code {
  font-size: 14px;
}`;
