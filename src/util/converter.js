import juice from "juice";
import { message } from "antd";
import { BASIC_THEME_ID, MARKDOWN_THEME_ID, CODE_THEME_ID, FONT_THEME_ID } from './constant';


export const parseHtml = () => {
  const element = document.getElementById('copy');
  const inner = element.children[0].children;
  for (const item of inner) {
    item.setAttribute("data-tool", "MacDown编辑器");
  }
  let html = element.innerHTML;
  // console.log("prev", html);
  html = html.replace(/<mjx-container (class="inline.+?)<\/mjx-container>/g, "<span $1</span>");
  html = html.replace(/\s<span class="inline/g, '&nbsp;<span class="inline');
  html = html.replace(/svg><\/span>\s/g, "svg></span>&nbsp;");
  html = html.replace(/mjx-container/g, "section");
  html = html.replace(/class="mjx-solid"/g, 'fill="none" stroke-width="70"');
  html = html.replace(/<mjx-assistive-mml.+?<\/mjx-assistive-mml>/g, "");
  const basicStyle = document.getElementById(BASIC_THEME_ID).innerText;
  const markdownStyle = document.getElementById(MARKDOWN_THEME_ID).innerText;
  const codeStyle = document.getElementById(CODE_THEME_ID).innerText;
  const fontStyle = document.getElementById(FONT_THEME_ID).innerText;
  let res = "";
  try {
    res = juice.inlineContent(html, basicStyle, markdownStyle, codeStyle, fontStyle, {
      inlinePseudoElements: true,
      preserveImportant: true,
    });
  } catch (e) {
    message.error("请检查 CSS 文件是否编写正确！");
  }
  try {
    res = juice.inlineContent(html, basicStyle + markdownStyle + codeStyle + fontStyle, {
      inlinePseudoElements: true,
      preserveImportant: true,
    });
  } catch (e) {
    message.error("请检查 CSS 文件是否编写正确！");
  }
  // console.log(res);
  const codeReg = /<pre([^>])*class="custom"([^>])*><code([^>])*style="([^"])*display: block;([^"])*"([^>])*>/g;
  const codeMatch = res.match(codeReg);
  if (codeMatch) {
    const convertTag = codeMatch[0].replace(/display: block;/g, "display: -webkit-box;");
    res = res.replace(codeReg, convertTag);
  }
  return res;
}

export const copySafari = (text) => {
  // 获取 input
  let input = document.getElementById("copy-input");
  if (!input) {
    // input 不能用 CSS 隐藏，必须在页面内存在。
    input = document.createElement("input");
    input.id = "copy-input";
    input.style.position = "absolute";
    input.style.left = "-1000px";
    input.style.zIndex = "-1000";
    document.body.appendChild(input);
  }
  // 让 input 选中一个字符，无所谓那个字符
  input.value = "NOTHING";
  input.setSelectionRange(0, 1);
  input.focus();

  // 复制触发
  document.addEventListener("copy", function copyCall(e) {
    e.preventDefault();
    e.clipboardData.setData("text/html", text);
    e.clipboardData.setData("text/plain", text);
    document.removeEventListener("copy", copyCall);
  });
  document.execCommand("copy");
};