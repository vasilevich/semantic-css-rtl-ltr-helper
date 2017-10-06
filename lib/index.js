"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStylesList = function () { return document.getElementsByTagName('style').slice(); };
var addStyle = function (req) {
    var currentStyles = getStylesList();
    var style = req();
    return getStylesList().find(function (element) { return (!currentStyles.includes(element)); });
};
var rtlStyle = addStyle(function () { return (require('../../node_modules/semantic-ui-css/rtl.min.css')); });
var ltrStyle = addStyle(function () { return (require('../../node_modules/semantic-ui-css/ltr.min.css')); });
var commonStyle = addStyle(function () { return (require('../../node_modules/semantic-ui-css/common.min.css')); });
var HTMLTag = document.getElementsByTagName('html')[0];
rtlStyle.disabled = true;
ltrStyle.disabled = true;
exports.setStyleDirection = function (direction) {
    switch (direction) {
        case "rtl":
            rtlStyle.disabled = false;
            ltrStyle.disabled = true;
            HTMLTag.dir = "rtl";
            break;
        case "ltr":
            rtlStyle.disabled = true;
            ltrStyle.disabled = false;
            HTMLTag.dir = "ltr";
            break;
    }
};
//# sourceMappingURL=index.js.map