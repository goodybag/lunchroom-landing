module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("section#email-signup-cta.page-section.hero-unit.primary-section", [ "\n\n  ", h("div.container", [ "\n    ", h("h1.section-header", [ "Get your lunch delivered every day." ]), "\n    ", h("p", [ "Your choice of meal brought to you at work. Starts August 17th, 2015." ]), "\n    ", ch({"anchor":"subscribe"}, function () { return h("div", {"dataset":{"componentId":"subscribe","componentImpl":null,"componentAnchorId":"subscribe"}});}), "\n    ", h("h2.outro-header", [ "Share the love! Send this page to your coworkers." ]), "\n  " ]), "\n\n    " ]);
}
};
},
getComponents: function () {
return {
"subscribe": {
buildVTree: function (h, ch) {
return h("form.cta-form.form", {"attributes":{"action":"#"},"dataset":{}}, ch({"id":"subscribe"}, function () { return [ "\n      ", h("div.form-group", [ "\n        ", h("div.email-wrapper", [ "\n          ", h("input", {"attributes":{"type":"email","name":"email"},"dataset":{"componentElm":"email"}}), "\n        " ]), "\n        ", h("div.submit-wrapper", [ "\n          ", h("button.btn.btn-primary", {"dataset":{"componentElm":"subscribeButton"}}, [ "Get notified" ]), "\n        " ]), "\n      " ]), "\n      ", h("p.form-explanation", [ "Enter your email to receive daily menus when we launch!" ]), "\n    " ]; }));
}
}
  };
},
getScripts: function () {
var scripts = {};
return scripts;
}
};