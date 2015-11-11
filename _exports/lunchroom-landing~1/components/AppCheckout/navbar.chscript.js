module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.lunchroom-header", [ "\n\n  ", h("div.container", [ "\n    ", h("div.modules", [ "\n      ", ch({"view":"menuAvailable"}, function () { return h("div.module", {"attributes":{"title":""},"dataset":{"toggle":"tooltip","originalTitle":"We text you when your food arrives"}}, [ "\n        Deliver to: ", h("small", {"dataset":{"componentProp":"deliverTo"}}, ch({"property":"deliverTo"}, function () { return [ "Bazaarvoice" ]; })), "\n      " ]); }), "\n      ", ch({"view":"menuAvailable"}, function () { return h("div.module", {"attributes":{"title":""},"dataset":{"toggle":"tooltip","originalTitle":"We text you when your food arrives"}}, [ "\n        Delivery Time: ", h("small", {"dataset":{"componentProp":"deliveryTime"}}, ch({"property":"deliveryTime"}, function () { return [ "12:00-12:30 PM" ]; })), "\n      " ]); }), "\n      ", ch({"view":"orderCountdown"}, function () { return h("div.module", {"dataset":{"componentViewVisibility":"hidden"}}, [ "\n        Time left to order:\n        ", h("small.text-important", {"dataset":{"componentProp":"timeLeftToOrder"}}, ch({"property":"timeLeftToOrder"}, function () { return [ "1 hr 26min" ]; })), "\n      " ]); }), "\n    " ]), "\n    ", h("div.tabs", {"dataset":{}}, ch({"section":"tabs"}, function () { return [ "\n      ", ch({"section":"tabs","view":"active"}, function () { return h("a.active", {"attributes":{"href":"#"},"dataset":{"id":"\\{\\{id\\}\\}","componentAction":"selectDay"}}, [ h("span", {"dataset":{"componentProp":"tabDay"}}, ch({"property":"tabDay"}, function () { return [ "Mon" ]; })), h("small", {"dataset":{"componentProp":"tabDate"}}, ch({"property":"tabDate"}, function () { return [ "Jan 26" ]; })) ]); }), "\n      ", ch({"section":"tabs","view":"default"}, function () { return h("a", {"attributes":{"href":"#"},"dataset":{"id":"\\{\\{id\\}\\}","componentAction":"selectDay"}}, [ h("span", {"dataset":{"componentProp":"tabDay"}}, ch({"property":"tabDay"}, function () { return [ "Tues" ]; })), h("small", {"dataset":{"componentProp":"tabDate"}}, ch({"property":"tabDate"}, function () { return [ "Jan 27" ]; })) ]); }), "\n      ", "\n      ", "\n      ", "\n    " ]; })), "\n  " ]), "\n\n    " ]); });
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