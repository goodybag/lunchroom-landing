module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("form.cta-form.form", {"attributes":{"action":"#"}}, [ "\n\n      ", h("div.form-group", [ "\n\n        ", ch({"view":"form"}, function () { return h("div", {"dataset":{}}, [ "\n          ", h("div.email-wrapper", [ "\n            ", h("input", {"attributes":{"type":"email","name":"email","email":"{{email}}"},"dataset":{"componentProp":"email"}}, ch({"property":"email","propertyTarget":"email"}, function () { return ; })), "\n          " ]), "\n          ", h("div.submit-wrapper", [ "\n            ", h("button.btn.btn-primary", {"attributes":{"data:component:action":"subscribe"}}, [ "Get notified" ]), "\n          " ]), "\n        " ]); }), "\n        ", ch({"view":"sent"}, function () { return h("div", {"dataset":{}}, [ "\n          ", h("p.form-explanation", [ "Check your email to confirm your subscription!" ]), "\n        " ]); }), "\n\n      " ]), "\n      ", h("p.form-explanation", [ "Enter your email to receive daily menus when we launch!" ]), "\n    \n    " ]); });
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