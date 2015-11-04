module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.lunchroom-header", [ "\n\n  ", h("div.container", [ "\n    ", h("div.modules", [ "\n      ", ch({"view":"menuAvailable"}, function () { return h("div.module.hidden", {"attributes":{"title":""},"dataset":{"toggle":"tooltip","originalTitle":"We text you when your food arrives"}}, [ "\n        Deliver to: ", h("small", {"dataset":{}}, ch({"property":"deliverTo"}, function () { return [ "Bazaarvoice" ]; })), "\n      " ]); }), "\n      ", ch({"view":"menuAvailable"}, function () { return h("div.module.hidden", {"attributes":{"title":""},"dataset":{"toggle":"tooltip","originalTitle":"We text you when your food arrives"}}, [ "\n        Delivery Time: ", h("small", {"dataset":{}}, ch({"property":"deliveryTime"}, function () { return [ "12:00-12:30 PM" ]; })), "\n      " ]); }), "\n      ", ch({"view":"orderCountdown"}, function () { return h("div.module", {"style":{"visibility":"hidden"},"dataset":{"componentViewVisibility":"hidden"}}, [ "\n        Time left to order:\n        ", h("small.text-important", {"dataset":{}}, ch({"property":"timeLeftToOrder"}, function () { return [ "1 hr 26min" ]; })), "\n      " ]); }), "\n    " ]), "\n    ", h("div.tabs", {"dataset":{}}, ch({"section":"tabs"}, function () { return [ "\n      ", ch({"section":"tabs","view":"active"}, function () { return h("a.active.hidden", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Mon" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 26" ]; })) ]); }), "\n      ", ch({"section":"tabs","view":"default"}, function () { return h("a.hidden", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Tues" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 27" ]; })) ]); }), "\n      ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Weds" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 28" ]; })) ]), "\n      ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Thurs" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 29" ]; })) ]), "\n      ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Fri" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 30" ]; })) ]), "\n    " ]; })), "\n  " ]), "\n\n    " ]);
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