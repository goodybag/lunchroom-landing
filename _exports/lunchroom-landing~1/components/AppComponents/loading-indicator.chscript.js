module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.loading-indicator", [ "\n\n  ", h("div.loading-indicator-graphic", [ "\n    ", h("img", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-happy-9574e8b.png"}}), "\n  " ]), "\n  ", h("div.loading-indicator-text", [ "Loading..." ]), "\n\n    " ]);
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