module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("header.navbar.collapsed", [ "\n\n        ", h("div.container", [ "\n          ", h("a", {"attributes":{"href":"/"}}, [ "\n            ", h("img.navbar-logo", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/logo.png","alt":"Goodybag.com"}}), "\n          " ]), "\n          ", h("ul.nav", [ "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/register"},"dataset":{"componentElm":"signupLink"}}, [ "Sign Up" ]) ]), "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/login"},"dataset":{"componentElm":"loginLink"}}, [ "Login" ]) ]), "\n          " ]), "\n        " ]), "\n      \n    " ]);
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