"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStylesList = function () { return Array.prototype.slice.call(document.getElementsByTagName('style'), 0); };
var addStyle = function (req) {
    var currentStyles = getStylesList();
    var style = req();
    return getStylesList().filter(function (element) { return (!currentStyles.includes(element)); });
};
var setStyleDisabledState = function (styles, state) {
    styles.forEach(function (style) { return style.disabled = state; });
};
var global = window;
global.rtlSemanticStyle = global.rtlSemanticStyle || addStyle(function () { return (require('../../semantic-ui-css/rtl.min.css')); });
global.ltrSemanticStyle = global.ltrSemanticStyle || addStyle(function () { return (require('../../semantic-ui-css/ltr.min.css')); });
global.commonSemanticStyle = global.commonSemanticStyle || addStyle(function () { return (require('../../semantic-ui-css/common.min.css')); });
var HTMLTag = document.getElementsByTagName('html')[0];
exports.setStyleDirection = function (dir, lang) {
    switch (dir) {
        case "rtl":
            setStyleDisabledState(global.rtlSemanticStyle, false);
            setStyleDisabledState(global.ltrSemanticStyle, true);
            setStyleDisabledState(global.commonSemanticStyle, false);
            HTMLTag.dir = "rtl";
            break;
        case "ltr":
            setStyleDisabledState(global.rtlSemanticStyle, true);
            setStyleDisabledState(global.ltrSemanticStyle, false);
            setStyleDisabledState(global.commonSemanticStyle, false);
            HTMLTag.dir = "ltr";
            break;
        default:
            setStyleDisabledState(global.rtlSemanticStyle, true);
            setStyleDisabledState(global.ltrSemanticStyle, true);
            setStyleDisabledState(global.commonSemanticStyle, true);
            break;
    }
    if (lang) {
        HTMLTag.lang = lang;
    }
};
//# sourceMappingURL=index.js.map