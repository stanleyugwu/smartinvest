import React, { useEffect } from "react";
import injectScript from "../utils/injectScriptTag";

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
    <div className="text-center d-block" id="__translate-script-wrapper">
      <div id="google_translate_element"></div>
      {/* The script tags for google translate will go here */}
    </div>
  );
}

export default React.memo(GoogleTranslate);
