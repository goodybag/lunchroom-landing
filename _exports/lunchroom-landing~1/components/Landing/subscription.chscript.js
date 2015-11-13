module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("section#email-signup-cta.page-section.hero-unit.primary-section", [ "\n\n  ", h("div.container", [ "\n    ", h("h1.section-header", [ "Get your lunch delivered every day." ]), "\n    ", h("p", [ "Your choice of meal brought to you at work." ]), "\n    ", h("form.cta-form.form", {"attributes":{"action":"#"}}, [ "\n      ", h("div.form-group", [ "\n\n        ", ch({"view":"form"}, function () { return h("div", {"dataset":{}}, [ "\n          ", h("div.email-wrapper", [ "\n            ", h("input", {"attributes":{"type":"email","name":"email","email":"{{email}}"},"dataset":{"componentProp":"email"}}, ch({"property":"email","propertyTarget":"email"}, function () { return ; })), "\n          " ]), "\n          ", h("div.submit-wrapper", [ "\n            ", h("button.btn.btn-primary", {"dataset":{"componentAction":"subscribe"}}, [ "Get notified" ]), "\n          " ]), "\n        " ]); }), "\n        ", ch({"view":"sent"}, function () { return h("div", {"dataset":{}}, [ "\n          ", h("p.form-explanation", [ "Check your email to confirm your subscription!" ]), "\n        " ]); }), "\n\n      " ]), "\n      ", h("p.form-explanation", [ "Enter your email to receive daily menus when we launch!" ]), "\n    " ]), "\n    ", h("h2.outro-header", [ "Share the love! Send this page to your coworkers." ]), "\n  " ]), "\n\n    " ]); });
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