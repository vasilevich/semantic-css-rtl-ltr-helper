"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStylesList = function () { return Array.prototype.slice.call(document.getElementsByTagName('style'), 0); };
var addStyle = function (req) {
    var currentStyles = getStylesList();
    var style = req();
    return getStylesList().find(function (element) { return (!currentStyles.includes(element)); });
};
var rtlStyle = addStyle(function () { return (require('../../semantic-ui-css/rtl.min.css')); });
var ltrStyle = addStyle(function () { return (require('../../semantic-ui-css/ltr.min.css')); });
var commonStyle = addStyle(function () { return (require('../../semantic-ui-css/common.min.css')); });
var HTMLTag = document.getElementsByTagName('html')[0];
exports.setStyleDirection = function (direction) {
    switch (direction) {
        case "rtl":
            rtlStyle.disabled = false;
            ltrStyle.disabled = true;
            commonStyle.disabled = false;
            HTMLTag.dir = "rtl";
            break;
        case "ltr":
            rtlStyle.disabled = true;
            ltrStyle.disabled = false;
            commonStyle.disabled = false;
            HTMLTag.dir = "ltr";
            break;
        default:
            rtlStyle.disabled = true;
            ltrStyle.disabled = true;
            commonStyle.disabled = true;
            break;
    }
};
exports.setStyleDirection();
//# sourceMappingURL=index.js.map