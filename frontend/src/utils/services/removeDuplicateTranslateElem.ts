/**
 * Daemon script to remove duplicate google translate element from any where in the app
 */
const removeDuplicateTranslateElem = () => {
  const trans = document.querySelectorAll<HTMLDivElement>(
    "select.goog-te-combo"
  );
  
  if (trans.length > 1) {
    trans[1].style.display = "none";
    document.querySelectorAll<HTMLDivElement>(".skiptranslate.goog-te-gadget")[1].style.display = "none";
  }
};

export default removeDuplicateTranslateElem;
