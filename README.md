[![npm version](https://badge.fury.io/js/semantic-css-rtl-ltr-helper.svg)](https://www.npmjs.com/package/semantic-css-rtl-ltr-helper)
# Semantic RTL/LTR easy switch
This repository depends on [Semantic CSS converted to RTL/LTR](https://github.com/Okoyl/Semantic-UI-CSS) and it is added as a dependency in ```package.json```.
The code in this repository allows you to, progamantically switch between RTL/LTR semantic CSS within your    
code using the minimum CSS code required to achieve it:   
`common.min.css` - is the common CSS code between ltr/rtl files.   
`rtl.min.css` - is the difference that allows RTL support.  
`ltr.min.css` - is the difference that allows LTR support. 
## Examples:
### How to use within your code:
##* Install
#### YARN
```bash
yarn add semantic-css-rtl-ltr-helper
```
### or     
#### NPM
```bash
npm install semantic-css-rtl-ltr-helper
```

##* Run    
#### Typescript:    
```ts
/* First import the helper functions into your project like so:*/
import {setStyleDirection} from 'semantic-css-rtl-ltr-helper';   
   
/**...Some other code that you want to put here... */
   
// Then in order to switch between RTL/LTR you must execute like this:
//To set semantic RTL:
setStyleDirection("rtl");

//To set semantic LTR:
setStyleDirection("ltr");
//To disable semantic
setStyleDirection();
```
#### Javascript
Same as above but maybe use the normal js kind of import, not much other difference.

Please note:   
Once you import/require   
`'semantic-css-rtl-ltr-helper'`   
into your code,
3 style tags will be automatically added into the `HEAD` of your rendered `HTML` file.
of the 3 files mentioned above (`common.min.css` `rtl.min.css` `ltr.min.css`  ) in enabled mode.
so all the 3 will be active until you use one of the commands mentioned above.