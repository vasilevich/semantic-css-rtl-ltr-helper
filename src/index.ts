const enum elementDirection {
    LTR = 'ltr',
    RTL = 'rtl',
}

const getStylesList = () => (Array.prototype.slice.call(document.getElementsByTagName('style'), 0) as HTMLFieldSetElement[]);
const addStyle = (req: any): HTMLFieldSetElement[] => {
    const currentStyles: Node[] = getStylesList();
    const style = req();
    return getStylesList().filter((element: any) => (!currentStyles.includes(element)));
};
const setStyleDisabledState = (styles: HTMLFieldSetElement[], state: boolean) => {
    styles.forEach((style) => style.disabled = state)
};
const global: any = window;
global.rtlSemanticStyle = global.rtlSemanticStyle || addStyle(() => (require('../../semantic-ui-css/rtl.min.css')));
global.ltrSemanticStyle = global.ltrSemanticStyle || addStyle(() => (require('../../semantic-ui-css/ltr.min.css')));
global.commonSemanticStyle = global.commonSemanticStyle || addStyle(() => (require('../../semantic-ui-css/common.min.css')));
const HTMLTag = document.getElementsByTagName('html')[0];
/**
 *
 * @param {string} dir sets the dir in the HTML tag, in addtion turns on/off semantic RTL/LTR/all together
 * @param {string} lang optionally sets the "lang" in the HTML tag
 */
export const setStyleDirection = (dir?: string, lang?: string) => {
    switch (dir) {
        case elementDirection.RTL:
            setStyleDisabledState(global.rtlSemanticStyle, false);
            setStyleDisabledState(global.ltrSemanticStyle, true);
            setStyleDisabledState(global.commonSemanticStyle, false);
            HTMLTag.dir = elementDirection.RTL;
            break;
        case elementDirection.LTR:
            setStyleDisabledState(global.rtlSemanticStyle, true);
            setStyleDisabledState(global.ltrSemanticStyle, false);
            setStyleDisabledState(global.commonSemanticStyle, false);
            HTMLTag.dir = elementDirection.LTR;
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