import constants from "../../utils/constants";

(function () {
    var options = {
        whatsapp: constants.CONTACT_NUMBER, // WhatsApp number
        email: constants.SUPPORT_EMAIL, // Email
        call_to_action: "Message us", // Call to action
        button_color: "#E74339", // Color of button
        position: "left", // Position may be 'right' or 'left'
        order: "whatsapp,email", // Order of buttons
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    // eslint-disable no-undef
    // @ts-ignore
    s.onload = function () { WhWidgetSendButton?.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x?.parentNode?.insertBefore(s, x);
})();