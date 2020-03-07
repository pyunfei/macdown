export const replaceStyle = (id, css) => {
  const style = document.getElementById(id);
  console.log(style)
  try {
    style.innerHTML = css;
  } catch (e) {
    console.log(e);
    style.styleSheet.cssText = css;
  }
  const head = document.getElementsByTagName("head")[0];
  head.appendChild(style);
};


export const addStyleLabel = (STYLE_LABELS) => {
  const add = (name) => {
    const style = document.createElement("style");
    style.id = name;
    const head = document.getElementsByTagName("head")[0];
    head.appendChild(style);
    console.log(style);
  };
  STYLE_LABELS.forEach((name) => add(name));
};