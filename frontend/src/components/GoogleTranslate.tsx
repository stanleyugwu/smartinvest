import React, { useEffect } from "react";
import injectScript from "../utils/services/injectScriptTag";

function GoogleTranslate() {
  useEffect(() => {
    injectScript(
      "#__translate-script-wrapper",
      undefined,
      `function googleTranslateElementInit() { new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element')}`
    );
    injectScript(
      "#__translate-script-wrapper",
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
  }, []);

  return (
    <div className="text-center d-block relative" style={{zIndex:10}} id="__translate-script-wrapper">
      <div id="google_translate_element"></div>
      {/* The script tags for google translate will be injected here */}
    </div>
  );
}

export default GoogleTranslate;
