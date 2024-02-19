/*! For license information please see stories-Button-mdx.221b00e4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[2399,8256],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./projects/soe-angular/src/stories/Button.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Loading:function(){return Loading},Primary:function(){return Primary},Secondary:function(){return Secondary}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-button.mjs");const meta={title:"Components/Button",component:_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.eB,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.jo)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[_public_api__WEBPACK_IMPORTED_MODULE_1__.q8],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_2__.yu]})],parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Primary={render:args=>({props:args,template:`<button mat-flat-button color="primary" [disabled]="${args.disabled}">${args.ngContent}</button>`}),argTypes:{ngContent:{description:"Content of the button element.",table:{type:{summary:"string"}}},disabled:{type:"boolean",description:"Whether the component is disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}}},args:{ngContent:"Primary",disabled:!1}},Secondary={render:args=>({props:args,template:`<button mat-stroked-button color="primary" [disabled]="disabled">${args.ngContent}</button>`}),args:{ngContent:"Secondary",disabled:!1}},Loading={render:args=>({props:args,template:`<button mat-flat-button color="primary" [loading]="true">${args.ngContent}</button>`}),args:{ngContent:"Secondary",disabled:!1}}},"./projects/soe-angular/src/stories/DoAndDont.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_assets_do_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/stories/storybook/assets/do.svg"),_assets_dont_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/soe-angular/src/stories/storybook/assets/dont.svg");__webpack_exports__.Z=({doContent:doContent,dontContent:dontContent})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"do-dont"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"do"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{class:"do-dont-head"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_do_svg__WEBPACK_IMPORTED_MODULE_1__}),"Do"),doContent),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"dont"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{class:"do-dont-head"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_dont_svg__WEBPACK_IMPORTED_MODULE_2__}),"Don't"),dontContent))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./projects/soe-angular/src/stories/Button.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Button_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/soe-angular/src/stories/Button.stories.ts"),_DoAndDont_jsx__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./projects/soe-angular/src/stories/DoAndDont.jsx");function _createMdxContent(props){const _components=Object.assign({p:"p",h2:"h2",ul:"ul",li:"li",strong:"strong",h3:"h3",a:"a"},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.h_,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"stylesheet",type:"text/css",href:"../storybook/assets/docs-style.css"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Dx,{}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Buttons are used for interface actions. Primary style should be used only once per section for main call-to-action,\nwhile other styles can appear more frequently."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A Button component is used to trigger actions or submit forms in your application.\nUse the provided button variants (primary and secondary) to control the visual priority of the view.\nTry to keep the amount of buttons in one view low."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DoAndDont_jsx__WEBPACK_IMPORTED_MODULE_3__.Z,{doContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Use buttons to communicate actions: "}),"Buttons allow users to interact with pages in a variety of ways. Use button labels express what action will occur when the user interacts with it."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Use Clear Labels: "}),"Label your buttons with concise, descriptive text that clearly indicates their purpose."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Disable buttons when appropriate: "}),"Disable buttons when an action cannot be performed to prevent user confusion."]})]}),dontContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Don't use multiple primary buttons per content area: "}),"Each content area or modal should have only one primary button, and any remaining calls to action should be represented as lower emphasis (secondary) buttons."]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.li,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Don't use buttons as navigational elements: "}),"Don't use buttons for navigation where the link appears within or following a sentence."]})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"content",children:"Content"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A button's text label is the most important element on a button, as it communicates the action that will be performed when the user interacts with it.\nButtons should have descriptive labels that clearly convey the action they trigger. Keep labels concise and action-oriented."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'To provide enough context, use the verb + noun content formula on buttons except in the case of common actions like "Close", "Cancel", "Add", or "Delete".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The primary button is typically used for the most important action on a page.\nThe Primary style is reserved for main call-to-action and should be used only once per content area or panel."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'Secondary buttons are used for less important actions or as complementary buttons.\nSecondary buttons can only be used in conjunction with a primary button.\nAs part of a pair, the secondary button\'s function is to perform the negative action of the set, such as "Cancel" or "Back".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_2__.Secondary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A loading button can be used when an action triggers a time-consuming operation.\nIt displays a loading indicator to inform the user of the ongoing process."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Xz,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_2__.Loading}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"api",children:"API"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Ed,{of:_Button_stories__WEBPACK_IMPORTED_MODULE_2__.Primary}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"references",children:"References"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://material.angular.io/components/button/overview",target:"_blank",rel:"nofollow noopener noreferrer",children:"Angular Material - Button"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://carbondesignsystem.com/components/button",target:"_blank",rel:"nofollow noopener noreferrer",children:"Carbon Design System - Button"})}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"feedback",children:"Feedback"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"xxx"})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_4__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./projects/soe-angular/src/stories/storybook/assets/do.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/do.79895e83.svg"},"./projects/soe-angular/src/stories/storybook/assets/dont.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/dont.d735fb9c.svg"}}]);