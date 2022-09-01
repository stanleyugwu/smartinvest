
/**
 * Injects script tag to the component after mounting.
 * It ensures script doesn't already exist as the target's child before the inertion
 * @param url The src value of the script tag
 * @param parentElemSelector The css selector of the element to inhect the script tag into e.g `body #main`
 * @param jsContent The javascript to inject inside the script tag
 */
const InjectScript = (
  parentElemSelector?: string,
  url?: string,
  jsContent?: string,
  tagAttr?:Record<string, string>
) => {
  if (!url && !jsContent) return;
  const target = document.querySelector(parentElemSelector || "body");
  // avoid duplicate insertion
  if (
    (jsContent && target?.innerHTML.includes(jsContent)) ||
    (url && target?.innerHTML.includes(url))
  ) return;

  const script = document.createElement("script");
  if (url) {
    script.src = url;
  } else if (jsContent) {
    script.innerHTML = jsContent;
  }
  // script.async = true;
  script.type = "text/javascript";
  if(tagAttr){
    for(let attr in tagAttr){
      script.setAttribute(attr,tagAttr[attr]);
    }
  }

  target?.appendChild(script);

  return () => {
    target?.removeChild(script);
  };
};

export default InjectScript;
