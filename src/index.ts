const enum elementDirection {
    LTR = 'ltr',
    RTL = 'rtl',
}

const getStylesList = () => (Array.prototype.slice.call(document.getElementsByTagName('style'), 0) as HTMLFieldSetElement[]);
const addStyle = (req: any): HTMLFieldSetElement => {
    const currentStyles: Node[] = getStylesList();
    const style = req();
    return getStylesList().find((element: any) => (!currentStyles.includes(element)));
};
const rtlStyle = addStyle(() => (require('../../semantic-ui-css/rtl.min.css')));
const ltrStyle = addStyle(() => (require('../../semantic-ui-css/ltr.min.css')));
const commonStyle = addStyle(() => (require('../../semantic-ui-css/common.min.css')));
const HTMLTag = document.getElementsByTagName('html')[0];
export const setStyleDirection = (direction?: string) => {
    switch (direction) {
        case elementDirection.RTL:
            rtlStyle.disabled = false;
            ltrStyle.disabled = true;
            commonStyle.disabled = false;
            HTMLTag.dir = elementDirection.RTL;
            break;
        case elementDirection.LTR:
            rtlStyle.disabled = true;
            ltrStyle.disabled = false;
            commonStyle.disabled = false;
            HTMLTag.dir = elementDirection.LTR;
            break;
        default:
            rtlStyle.disabled = true;
            ltrStyle.disabled = true;
            commonStyle.disabled = true;
            break;
    }
};
setStyleDirection();