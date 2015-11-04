module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.container.outro-header-section", [ "\n\n  ", h("h3.outro-header", [ "To give feedback or ask questions, please email us at ", h("a", {"attributes":{"href":"mailto:support@goodybag.com"}}, [ "support@goodybag.com" ]) ]), "\n\n    " ]);
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