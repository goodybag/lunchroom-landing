module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("form.cta-form.form", {"attributes":{"action":"#"}}, [ "\n\n      ", h("div.form-group", [ "\n        ", h("div.email-wrapper", [ "\n          ", h("input", {"attributes":{"type":"email","name":"email"},"dataset":{"componentElm":"email"}}), "\n        " ]), "\n        ", h("div.submit-wrapper", [ "\n          ", h("button.btn.btn-primary", {"dataset":{"componentElm":"subscribeButton"}}, [ "Get notified" ]), "\n        " ]), "\n      " ]), "\n      ", h("p.form-explanation", [ "Enter your email to receive daily menus when we launch!" ]), "\n    \n    " ]);
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