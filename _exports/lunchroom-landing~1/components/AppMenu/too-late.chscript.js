module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.container", [ "\n\n  ", h("div.warning-section", [ "\n    ", h("img.warning-section-supporting-graphic", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-shocked-2-4bc6fb3.png","alt":""}}), "\n    ", h("h2.warning-section-header", [ "Sorry, time’s up :(." ]), "\n    ", h("p", [ "You must place your order by ", h("span", {"dataset":{}}, ch({"property":"orderBy"}, function () { return [ "10am" ]; })), "." ]), "\n  " ]), "\n\n    " ]);
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