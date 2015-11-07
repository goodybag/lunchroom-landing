module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container", [ "\n\n  ", h("div.warning-section", [ "\n    ", h("img.warning-section-supporting-graphic", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-shocked-2-4bc6fb3.png","alt":""}}), "\n    ", h("h2.warning-section-header", [ "Sorry, we are closed today ... but feel free to order ahead for the rest of the week!" ]), "\n    ", h("p", [ "I'm a cupcake; I can't do it! You can, though :)" ]), "\n  " ]), "\n\n    " ]); });
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