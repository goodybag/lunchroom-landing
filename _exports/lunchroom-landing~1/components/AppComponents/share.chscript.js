module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("section#section-item-tiles.page-section", [ "\n\n  ", h("div.container", [ "\n    ", h("div.panel-wrapper", {"style":{"max-width":"620px"}}, [ "\n      ", h("div.panel.panel-dark.panel-share-link", [ "\n        ", h("p.panel-text", [ "\n          ", h("strong", [ "Share this link" ]), " with coworkers to let them view the menu and place their own order!\n        " ]), /*
        */, h("input.panel-input.form-control", {"attributes":{"type":"text","value":"https://lunchroom.goodybag.com/bazaar-voice"}}), "\n      " ]), "\n    " ]), "\n  " ]), "\n\n    " ]); });
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