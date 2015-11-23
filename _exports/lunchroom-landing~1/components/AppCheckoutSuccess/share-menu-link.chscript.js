module.exports = {
id: ":f87e05ed3d52db76974c89fef046ae215575de4c",
getLayout: function () {
return {
id: ":f87e05ed3d52db76974c89fef046ae215575de4c",
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container.order-success", [ "\n\n  ", h("div.menu-share", [ "\n    ", h("h4.menu-share-title", [ "Share this link" ]), "\n    ", h("p.menu-share-followup", [ "with coworkers to let them view the menu and place their own order!" ]), "\n    ", h("input.menu-share-input", {"attributes":{"type":"text","value":"{{shareUrl}}"},"dataset":{"componentProp":"shareUrl"}}, ch({"property":"shareUrl","propertyTarget":"value"}, function () { return ; })), "\n  " ]), "\n\n    " ]); });
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