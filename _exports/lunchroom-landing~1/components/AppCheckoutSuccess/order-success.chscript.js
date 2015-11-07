module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container.order-success", [ "\n\n  ", h("img.success-img", {"attributes":{"src":"/lunchroom-landing~1/resources/assets/img~success-d84e5c8.png","alt":""}}), "\n\n  ", h("p.order-success-note", [ "Your order is placed and will be ", h("strong", [ "delivered today between ", h("span", {"dataset":{}}, ch({"property":"pickupTime"}, function () { return [ "12:00-12:30pm" ]; })) ]), "." ]), "\n\n  ", h("p.order-success-note", [ "Your meal will be delivered ", h("strong", {"dataset":{}}, ch({"property":"deliveryLocation"}, function () { return [ "in the Bazaarvoice Lobby" ]; })), "." ]), "\n\n  ", h("p.order-success-note", [ "We'll send you an email and text you when it arrives." ]), "\n\n    " ]); });
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