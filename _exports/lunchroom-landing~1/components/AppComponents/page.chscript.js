module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("div.page.page-kitchen-sink", [ "\n\n      ", ch({"anchor":"header"}, function () { return h("div", {"dataset":{"componentId":"header","componentImpl":null,"componentAnchorId":"header"}});}), "\n\n      \n", ch({"anchor":"navbar"}, function () { return h("div", {"dataset":{"componentId":"navbar","componentImpl":null,"componentAnchorId":"navbar"}});}), "\n\n\n\n", ch({"anchor":"share"}, function () { return h("div", {"dataset":{"componentId":"share","componentImpl":null,"componentAnchorId":"share"}});}), "\n\n\n", h("section#section-loading-indicator.page-section", [ "\n  ", h("div.container", [ "\n    ", h("h2.section-title", [ "Loading indicator\n      ", h("button#loading-indicator-demo.btn.btn-primary", [ "Start Loading" ]), "\n    " ]), "\n  " ]), "\n" ]), "\n\n\n", ch({"anchor":"footer"}, function () { return h("div", {"dataset":{"componentId":"footer","componentImpl":null,"componentAnchorId":"footer"}});}), "\n\n", ch({"anchor":"loading-indicator"}, function () { return h("div", {"dataset":{"componentId":"loading-indicator","componentImpl":null,"componentAnchorId":"loading-indicator"}});}), "\n\n    \n    " ]);
}
};
},
getComponents: function () {
return {
"header": {
buildVTree: function (h, ch) {
return h("header.navbar.collapsed", {"dataset":{}}, ch({"id":"header"}, function () { return [ "\n        ", h("div.container", [ "\n          ", h("a", {"attributes":{"href":"/"}}, [ "\n            ", h("img.navbar-logo", {"attributes":{"src":"https://d3bqck8kwfkhx5.cloudfront.net/img/logo.png","alt":"Goodybag.com"}}), "\n          " ]), "\n          ", h("ul.nav", [ "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/register"}}, [ "Sign Up" ]) ]), "\n            ", h("li", [ h("a", {"attributes":{"href":"/pages/login"}}, [ "Login" ]) ]), "\n          " ]), "\n        " ]), "\n      " ]; }));
}
}
,"navbar": {
buildVTree: function (h, ch) {
return h("section#section-lunchroom-header.page-section", {"dataset":{}}, ch({"id":"navbar"}, function () { return [ "\n  ", h("div.lunchroom-header", [ "\n    ", h("div.container", [ "\n      ", h("div.modules", [ "\n        ", h("div.module", [ "\n          Deliver to: ", h("small", {"dataset":{}}, ch({"property":"deliverTo"}, function () { return [ "Bazaarvoice" ]; })), "\n        " ]), "\n        ", h("div.module", [ "\n          Delivery Time: ", h("small", {"dataset":{}}, ch({"property":"deliveryTime"}, function () { return [ "12:00-12:30 PM" ]; })), "\n        " ]), "\n        ", h("div.module", [ "\n          Time left to order:\n          ", h("small.text-important", {"dataset":{}}, ch({"property":"timeLeftToOrder"}, function () { return [ "1 hr 26min" ]; })), "\n        " ]), "\n        ", h("div.module.module-right.module-unpadded", [ "\n          ", h("a.btn.btn-primary", {"attributes":{"href":"checkout"},"dataset":{"componentElm":"checkoutButton"}}, [ "Checkout (", h("span", {"dataset":{}}, ch({"property":"cartItemCount"}, function () { return [ "1" ]; })), ")" ]), "\n        " ]), "\n      " ]), "\n      ", h("div.tabs", {"dataset":{}}, ch({"section":"tabs"}, function () { return [ "\n        ", ch({"section":"tabs","view":"active"}, function () { return h("a.active.hidden", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Mon" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 26" ]; })) ]); }), "\n        ", ch({"section":"tabs","view":"default"}, function () { return h("a.hidden", {"attributes":{"href":"#"},"dataset":{}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Tues" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 27" ]; })) ]); }), "\n        ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Weds" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 28" ]; })) ]), "\n        ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Thurs" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 29" ]; })) ]), "\n        ", h("a", {"attributes":{"href":"#"}}, [ h("span", {"dataset":{}}, ch({"property":"tabDay"}, function () { return [ "Fri" ]; })), h("small", {"dataset":{}}, ch({"property":"tabDate"}, function () { return [ "Jan 30" ]; })) ]), "\n      " ]; })), "\n    " ]), "\n  " ]), "\n" ]; }));
}
}
,"share": {
buildVTree: function (h, ch) {
return h("section#section-item-tiles.page-section", {"dataset":{}}, ch({"id":"share"}, function () { return [ "\n  ", h("div.container", [ "\n    ", h("div.panel-wrapper", {"style":{"max-width":"620px"}}, [ "\n      ", h("div.panel.panel-dark.panel-share-link", [ "\n        ", h("p.panel-text", [ "\n          ", h("strong", [ "Share this link" ]), " with coworkers to let them view the menu and place their own order!\n        " ]), /*
        */, h("input.panel-input.form-control", {"attributes":{"type":"text","value":"https://lunchroom.goodybag.com/bazaar-voice"}}), "\n      " ]), "\n    " ]), "\n  " ]), "\n" ]; }));
}
}
,"footer": {
buildVTree: function (h, ch) {
return h("footer.footer", {"dataset":{}}, ch({"id":"footer"}, function () { return [ "\n  ", h("ul.nav.footer-nav", [ "\n    ", h("li", [ h("a", {"attributes":{"href":"#"},"dataset":{"toggle":"modal","target":"#contact-us-modal"}}, [ "Contact Us" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/legal"}}, [ "Terms of service" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/privacy"}}, [ "Privacy policy" ]) ]), "\n  " ]), "\n" ]; }));
}
}
,"loading-indicator": {
buildVTree: function (h, ch) {
return h("div.loading-indicator", {"dataset":{}}, ch({"id":"loading-indicator"}, function () { return [ "\n  ", h("div.loading-indicator-graphic", [ "\n    ", h("img", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~cupcake-happy-9574e8b.png"}}), "\n  " ]), "\n  ", h("div.loading-indicator-text", [ "Loading..." ]), "\n" ]; }));
}
}
  };
},
getScripts: function () {
var scripts = {};
return scripts;
}
};