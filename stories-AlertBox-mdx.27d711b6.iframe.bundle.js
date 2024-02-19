/*! For license information please see stories-AlertBox-mdx.27d711b6.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[4500,991],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./projects/soe-angular/src/stories/AlertBox.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ActionsBelow:function(){return ActionsBelow},Error:function(){return Error},Info:function(){return Info},MultipleActions:function(){return MultipleActions},Success:function(){return Success},Warning:function(){return Warning}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-button.mjs");const meta={title:"Components/Alert Box",component:_public_api__WEBPACK_IMPORTED_MODULE_1__.T7,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot())]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.Ps,_angular_material_legacy_button__WEBPACK_IMPORTED_MODULE_5__.yu]})],parameters:{}};__webpack_exports__.default=meta;const Info={render:args=>({props:args,template:`<soe-alert-box \n      heading="${args.heading}" \n      icon="${args.icon}" \n      color="${args.color}" \n      action="${args.action}"\n      actionIcon="${args.actionIcon}"\n      [actions]="actions"\n      [actionsBelow]="${args.actionsBelow}">${args.ngContent}</soe-alert-box>`}),argTypes:{heading:{description:"Short descriptive title.",table:{type:{summary:"string"}}},ngContent:{description:"Content of the alert box component. Text used to give the user more context about the type of alert.",table:{type:{summary:"string"}}},color:{type:"string",description:"Style (color and icon) used for the alert box. Use one of `soe-info`, `soe-warn`, `soe-error` or `soe-success`.",defaultValue:"soe-info",options:["soe-info","soe-success","soe-warn","soe-error"],control:"select",table:{type:{summary:"string"},defaultValue:{summary:"soe-info"}}},action:{type:"string",description:"For single action. Button which gives the user an option to handle the alert.",table:{type:{summary:"string"}}},actionIcon:{type:"string",description:"For single action. Material icon displayed as part of the action button.",table:{type:{summary:"string"}}},icon:{type:"string",description:"The alerts main icon. Must not be changed for default alert box variants like success, info, error, etc.",table:{type:{summary:"string "}}},actions:{description:"For multiple actions. Buttons which give the user options to handle the alert.",table:{type:{summary:"AlertBoxAction[]",detail:"{ key?: string; text: string; icon?: string; routerLink?: string[]; }"}}},actionsBelow:{type:"boolean",description:"Displays action buttons below alert message. Usefull if the width of the alert box is restricted.",table:{type:{summary:"boolean"}}}},args:{heading:"Information",ngContent:"Notification Message",color:"soe-info",icon:"",action:"OK",actionIcon:"",actions:[],actionsBelow:!1}},Success={...Info,args:{...Info.args,heading:"Success",ngContent:"Success Message",color:"soe-success"}},Warning={...Info,args:{...Info.args,heading:"Warning",ngContent:"Warning Message",color:"soe-warn"}},Error={...Info,args:{...Info.args,heading:"Error",ngContent:"Error Message",color:"soe-error"}},MultipleActions={...Info,args:{...Info.args,actions:[{text:"Edit"},{text:"Delete",icon:"delete"}]}},ActionsBelow={...Info,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((story=>`<div style="max-width: 400px; margin: 0 auto;">${story}</div>`))],args:{...Info.args,actions:[{text:"Edit"},{text:"Delete",icon:"delete"}],actionsBelow:!0}}},"./projects/soe-angular/src/stories/DoAndDont.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_assets_do_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/stories/assets/do.svg"),_assets_dont_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/soe-angular/src/stories/assets/dont.svg");__webpack_exports__.Z=({doContent:doContent,dontContent:dontContent})=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"do-dont"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"do"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{class:"do-dont-head"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_do_svg__WEBPACK_IMPORTED_MODULE_1__}),"Do"),doContent),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{class:"dont"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{class:"do-dont-head"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:_assets_dont_svg__WEBPACK_IMPORTED_MODULE_2__}),"Don't"),dontContent))},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./projects/soe-angular/src/stories/AlertBox.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/soe-angular/src/stories/AlertBox.stories.ts"),_DoAndDont_jsx__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__("./projects/soe-angular/src/stories/assets/do.svg"),__webpack_require__("./projects/soe-angular/src/stories/assets/dont.svg"),__webpack_require__("./projects/soe-angular/src/stories/DoAndDont.jsx"));function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",ul:"ul",li:"li",h3:"h3",h2:"h2"},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.h_,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"stylesheet",type:"text/css",href:"..//assets/docs-style.css"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"alert-box",children:"Alert Box"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Alert Boxes show pressing and high-signal messages, such as system alerts. They are meant to be noticed and prompt users to take action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DoAndDont_jsx__WEBPACK_IMPORTED_MODULE_5__.Z,{doContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.ul,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Don't do this."})}),dontContent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Don't do this."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Avoid doing that."})]})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"title",children:"Title"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"The title should contains 2 to 3 word maximum"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Ideally it should stay in 1 line. Users must be able to zoom in a lot on the text size without losing content, so the title should be able to reflow nearly at will."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Title is a short description of the content (error, warning, info …)"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"text",children:"Text"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"The content should be display on maximum 5 lines"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"Content is a short description of the event which have occured on the page (error, warning, info …)"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:"It should explain briefly the type of error/info etc. contained in the collection"}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"actions",children:"Actions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.ul,{children:["\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:'Main action possible could be "see/select"'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.li,{children:'Main action can also be "delete/dismiss/apply" relying on the context'}),"\n"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"variants",children:"Variants"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"info",children:"Info"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use the info variant to inform the user about the status of the system. An inform message does not require any action."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__.Info}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"success",children:"Success"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use the success variant to communicate that a certain process or action was done successfully."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__.Success}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"warning",children:"Warning"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use the warning variant if something went wrong but the process does not need to be aborted. Provide actions to the user which help managing the warning."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__.Warning}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"error",children:"Error"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Use the error variant if an error occures which requires aborting the process or results in the application not working as expected."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.Xz,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__.Error}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_7__.ZX,{of:_AlertBox_stories__WEBPACK_IMPORTED_MODULE_2__.ActionsBelow})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"./projects/soe-angular/src/stories/assets/do.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/do.79895e83.svg"},"./projects/soe-angular/src/stories/assets/dont.svg":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__.p+"static/media/dont.d735fb9c.svg"}}]);