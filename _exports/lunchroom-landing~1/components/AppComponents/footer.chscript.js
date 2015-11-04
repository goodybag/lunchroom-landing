module.exports = {
getLayout: function () {
return {
buildVTree: function (h, ch) {
return h("footer.footer", [ "\n\n  ", h("ul.nav.footer-nav", [ "\n    ", h("li", [ h("a", {"attributes":{"href":"#"},"dataset":{"toggle":"modal","target":"#contact-us-modal"}}, [ "Contact Us" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/legal"}}, [ "Terms of service" ]) ]), "\n    ", h("li", [ h("a", {"attributes":{"href":"https://www.goodybag.com/privacy"}}, [ "Privacy policy" ]) ]), "\n  " ]), "\n\n    " ]);
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