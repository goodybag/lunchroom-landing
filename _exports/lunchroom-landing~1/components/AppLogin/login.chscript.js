module.exports = {
id: ":9fd08029de4159547fe8307e14c2438a540f46f7",
getLayout: function () {
return {
id: ":9fd08029de4159547fe8307e14c2438a540f46f7",
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.page-section-standalone", [ "\n\n  ", h("div.medium-container", [ "\n    ", h("form#login-form.login-form.form-vertical", {"attributes":{"action":"/login","method":"POST"}}, [ "\n      ", h("h2.page-title", [ "Login" ]), "\n      ", h("div.errors", [ "\n      " ]), "\n      ", h("div.form-group", [ "\n        ", h("label", {"attributes":{"for":"login-email"}}, [ "Email" ]), "\n        ", h("input#login-email", {"attributes":{"type":"email","name":"email"}}), "\n      " ]), "\n      \n      ", h("div.form-group", [ "\n        ", h("label", {"attributes":{"for":"login-password"}}, [ "Password" ]), "\n        ", h("input#login-password", {"attributes":{"type":"password","name":"password"}}), "\n      " ]), "\n      \n      ", h("div.form-group.form-group-submit", [ "\n        ", h("button.btn.btn-primary.btn-submit.btn-large", [ "Login" ]), "\n      " ]), "\n      ", h("p.login-footnote", [ "Don't have an account? ", h("a", {"attributes":{"href":"/register"}}, [ "Sign up" ]) ]), "\n    " ]), "\n    ", h("div.supporting-graphic", [ "\n      ", h("img", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/login-takeout.png"}}), "\n    " ]), "\n  " ]), "\n\n    " ]); });
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