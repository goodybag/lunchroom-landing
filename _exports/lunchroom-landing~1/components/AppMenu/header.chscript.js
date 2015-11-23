module.exports = {
id: ":dc86e27fc983909fead0db0ec7b4a10f90ca7dce",
getLayout: function () {
return {
id: ":dc86e27fc983909fead0db0ec7b4a10f90ca7dce",
buildVTree: function (h, ch) {
return ch({}, function () { return h("header.navbar.collapsed", [ "\n\n        ", h("div.container", [ "\n          ", h("a", {"attributes":{"href":"/"}}, [ "\n            ", h("img.navbar-logo", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/logo.png","alt":"Goodybag.com"}}), "\n          " ]), "\n          ", h("ul.nav", [ "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/register"},"dataset":{"componentAction":"signup"}}, [ "Sign Up" ]) ]), "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/login"},"dataset":{"componentAction":"login"}}, [ "Login" ]) ]), "\n          " ]), "\n        " ]), "\n      \n    " ]); });
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