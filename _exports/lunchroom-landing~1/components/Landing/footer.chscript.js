module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("footer.footer", [ "\n\n  ", h("ul.nav.footer-nav", [ "\n    ", h("li", [ h("a", {"attributes":{"href":"#"},"dataset":{"toggle":"modal","target":"#contact-us-modal"}}, [ "Contact Us" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/legal"}}, [ "Terms of service" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/privacy"}}, [ "Privacy policy" ]) ]), "\n  " ]), "\n\n  ", h("div#contact-us-modal.modal.fade", [ "\n    ", h("div.modal-dialog", [ "\n      ", h("div.modal-content", [ "\n        ", h("div.modal-header", [ "\n          ", h("h3.modal-title", [ "Contact Us" ]), "\n        " ]), "\n        ", h("form#contact-us-form.form.form-vertical.contact-us-form", {"attributes":{"action":"#"}}, [ "\n          ", h("div.modal-body", [ "\n            ", h("div.form-group", [ "\n              ", h("label", {"attributes":{"for":"name-input"}}, [ "Name" ]), "\n              ", h("input", {"attributes":{"type":"text","name":"name"},"dataset":{"componentProp":"name"}}, ch({"property":"name"}, function () { return ; })), "\n            " ]), "\n            ", h("div.form-group", [ "\n              ", h("label", {"attributes":{"for":"name-input"}}, [ "Email" ]), "\n              ", h("input", {"attributes":{"type":"email","name":"email"},"dataset":{"componentProp":"email"}}, ch({"property":"email"}, function () { return ; })), "\n            " ]), "\n            ", h("div.form-group", [ "\n              ", h("label", {"attributes":{"for":"message-input"}}, [ "Message" ]), "\n              ", h("textarea", {"attributes":{"rows":"6","type":"text","name":"message"},"dataset":{"componentProp":"message"}}, ch({"property":"message"}, function () { return ; })), "\n            " ]), "\n          " ]), "\n          ", h("div.modal-footer", [ "\n            ", h("button.btn.btn-default", {"attributes":{"type":"button"},"dataset":{"dismiss":"modal"}}, [ "Close" ]), "\n            ", h("button.btn.btn-primary", {"attributes":{"type":"submit"}}, [ "Submit" ]), "\n          " ]), "\n        " ]), "\n      " ]), "\n    " ]), "\n  " ]), "\n\n    " ]); });
}
};
},
getComponents: function () {
return {
  };
},
getScripts: function () {
var scripts = {};
return scripts;
}
};