module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return ch({}, function () { return h("div.container.order-summary-container", [ "\n\n  ", h("div.order-summary-wrapper", [ "\n    ", h("div.order-summary", [ "\n      ", h("div.order-summary-item", [ "\n        ", h("div.order-summary-col.order-summary-key", [ "Subtotal" ]), "\n        ", h("div.order-summary-col.order-summary-value", {"dataset":{"componentProp":"format.amount"}}, ch({"property":"format.amount"}, function () { return [ "$8.80" ]; })), "\n      " ]), "\n      ", h("div.order-summary-item", [ "\n        ", h("div.order-summary-col.order-summary-key", [ "Tax" ]), "\n        ", h("div.order-summary-col.order-summary-value", {"dataset":{"componentProp":"format.taxAmount"}}, ch({"property":"format.taxAmount"}, function () { return [ "$0.73" ]; })), "\n      " ]), "\n      ", h("div.order-summary-item", [ "\n        ", h("div.order-summary-col.order-summary-key", [ "Tip" ]), "\n        ", h("div.order-summary-col.order-summary-value", [ "Please, no tips!" ]), "\n      " ]), "\n      ", h("div.order-summary-item.order-summary-item-total", [ "\n        ", h("div.order-summary-col.order-summary-key", [ "Total" ]), "\n        ", h("div.order-summary-col.order-summary-value", {"dataset":{"componentProp":"format.total"}}, ch({"property":"format.total"}, function () { return [ "$12.37" ]; })), "\n      " ]), "\n    " ]), "\n    ", h("button.btn.btn-primary.btn-place-order", {"dataset":{"componentAction":"placeOrder"}}, [ "Place Order" ]), "\n  " ]), "\n\n    " ]); });
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