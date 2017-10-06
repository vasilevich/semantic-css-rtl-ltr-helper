export const enum elementDirection {
    LTR = 'ltr',
    RTL = 'rtl',
}

const getStylesList = () => ([...document.getElementsByTagName('style') as any] as HTMLFieldSetElement[]);
const addStyle = (req: any): HTMLFieldSetElement => {
    const currentStyles: Node[] = getStylesList();
    const style = req();
    return getStylesList().find((element: any) => (!currentStyles.includes(element)));
};
const rtlStyle = addStyle(() => (require('../../node_modules/semantic-ui-css/rtl.min.css')));
const ltrStyle = addStyle(() => (require('../../node_modules/semantic-ui-css/ltr.min.css')));
const commonStyle = addStyle(() => (require('../../node_modules/semantic-ui-css/common.min.css')));
const HTMLTag = document.getElementsByTagName('html')[0];
rtlStyle.disabled = true;
ltrStyle.disabled = true;
export const setStyleDirection = (direction: string) => {
    switch (direction) {
        case elementDirection.RTL:
            rtlStyle.disabled = false;
            ltrStyle.disabled = true;
            HTMLTag.dir = elementDirection.RTL;
            break;
        case elementDirection.LTR:
            rtlStyle.disabled = true;
            ltrStyle.disabled = false;
            HTMLTag.dir = elementDirection.LTR;
            break;
    }
};