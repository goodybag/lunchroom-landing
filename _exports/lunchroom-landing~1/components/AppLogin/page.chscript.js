module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.page.page-login", [ "\n\n      ", ch({"anchor":"header"}, function () { return h("div", {"dataset":{"componentId":"header","componentImpl":"","componentAnchorId":"header"}});}), "\n      \n      ", ch({"anchor":"login"}, function () { return h("div", {"dataset":{"componentId":"login","componentImpl":"","componentAnchorId":"login"}});}), "\n\n      \n      ", ch({"anchor":"footer"}, function () { return h("div", {"dataset":{"componentId":"footer","componentImpl":"","componentAnchorId":"footer"}});}), "\n    \n    " ]); });
}
};
},
getComponents: function () {
return {
"header": {
buildVTree: function (h, ch) {
return ch({}, function () { return h("header.navbar.collapsed", {"dataset":{}}, ch({"id":"header"}, function () { return [ "\n        ", h("div.container", [ "\n          ", h("a", {"attributes":{"href":"/"}}, [ "\n            ", h("img.navbar-logo", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/logo.png","alt":"Goodybag.com"}}), "\n          " ]), "\n          ", h("ul.nav", [ "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/register"},"dataset":{"componentAction":"signup"}}, [ "Sign Up" ]) ]), "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/login"},"dataset":{"componentAction":"login"}}, [ "Login" ]) ]), "\n          " ]), "\n        " ]), "\n      " ]; })); });
}
}
,"login": {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.page-section-standalone", {"dataset":{}}, ch({"id":"login"}, function () { return [ "\n  ", h("div.medium-container", [ "\n    ", h("form#login-form.login-form.form-vertical", {"attributes":{"action":"/login","method":"POST"}}, [ "\n      ", h("h2.page-title", [ "Login" ]), "\n      ", h("div.errors", [ "\n      " ]), "\n      ", h("div.form-group", [ "\n        ", h("label", {"attributes":{"for":"login-email"}}, [ "Email" ]), "\n        ", h("input#login-email", {"attributes":{"type":"email","name":"email"}}), "\n      " ]), "\n      \n      ", h("div.form-group", [ "\n        ", h("label", {"attributes":{"for":"login-password"}}, [ "Password" ]), "\n        ", h("input#login-password", {"attributes":{"type":"password","name":"password"}}), "\n      " ]), "\n      \n      ", h("div.form-group.form-group-submit", [ "\n        ", h("button.btn.btn-primary.btn-submit.btn-large", [ "Login" ]), "\n      " ]), "\n      ", h("p.login-footnote", [ "Don't have an account? ", h("a", {"attributes":{"href":"/register"}}, [ "Sign up" ]) ]), "\n    " ]), "\n    ", h("div.supporting-graphic", [ "\n      ", h("img", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/login-takeout.png"}}), "\n    " ]), "\n  " ]), "\n" ]; })); });
}
}
,"loading-indicator": {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.loading-indicator", {"dataset":{}}, ch({"id":"loading-indicator"}, function () { return [ "\n          ", h("div.loading-indicator-graphic", [ "\n            ", h("img", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-happy-9574e8b.png"}}), "\n          " ]), "\n          ", h("div.loading-indicator-text", [ "Loading..." ]), "\n        " ]; })); });
}
}
,"footer": {
buildVTree: function (h, ch) {
return ch({}, function () { return h("footer.footer", {"dataset":{}}, ch({"id":"footer"}, function () { return [ "\n        ", h("ul.nav.footer-nav", [ "\n          ", h("li", [ h("a", {"attributes":{"href":"#"},"dataset":{"toggle":"modal","target":"#contact-us-modal"}}, [ "Contact Us" ]) ]), "\n          ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/legal"}}, [ "Terms of service" ]) ]), "\n          ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/privacy"}}, [ "Privacy policy" ]) ]), "\n        " ]), "\n\n        ", ch({"anchor":"loading-indicator"}, function () { return h("div", {"dataset":{"componentId":"loading-indicator","componentImpl":"","componentAnchorId":"loading-indicator"}});}), "\n        ", h("div#contact-us-modal.modal.fade", [ "\n          ", h("div.modal-dialog", [ "\n            ", h("div.modal-content", [ "\n              ", h("div.modal-header", [ "\n                ", h("h3.modal-title", [ "Contact Us" ]), "\n              " ]), "\n              ", h("form#contact-us-form.form.form-vertical.contact-us-form", {"attributes":{"action":"#"}}, [ "\n                ", h("div.modal-body", [ "\n                  ", h("div.form-group", [ "\n                    ", h("label", {"attributes":{"for":"name-input"}}, [ "Name" ]), "\n                    ", h("input", {"attributes":{"type":"text","name":"name"},"dataset":{"componentProp":"name"}}, ch({"property":"name"}, function () { return ; })), "\n                  " ]), "\n                  ", h("div.form-group", [ "\n                    ", h("label", {"attributes":{"for":"name-input"}}, [ "Email" ]), "\n                    ", h("input", {"attributes":{"type":"email","name":"email"},"dataset":{"componentProp":"email"}}, ch({"property":"email"}, function () { return ; })), "\n                  " ]), "\n                  ", h("div.form-group", [ "\n                    ", h("label", {"attributes":{"for":"message-input"}}, [ "Message" ]), "\n                    ", h("textarea", {"attributes":{"rows":"6","type":"text","name":"message"},"dataset":{"componentProp":"message"}}, ch({"property":"message"}, function () { return ; })), "\n                  " ]), "\n                " ]), "\n                ", h("div.modal-footer", [ "\n                  ", h("button.btn.btn-default", {"attributes":{"type":"button"},"dataset":{"dismiss":"modal"}}, [ "Close" ]), "\n                  ", h("button.btn.btn-primary", {"attributes":{"type":"submit"}}, [ "Submit" ]), "\n                " ]), "\n              " ]), "\n            " ]), "\n          " ]), "\n        " ]), "\n      " ]; })); });
}
}
  };
},
getScripts: function () {
var scripts = {};
return scripts;
}
};