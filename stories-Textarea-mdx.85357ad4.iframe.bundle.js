/*! For license information please see stories-Textarea-mdx.85357ad4.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[9370,5641],{"./node_modules/@mdx-js/react/lib/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{NF:function(){return withMDXComponents},Zo:function(){return MDXProvider},ah:function(){return useMDXComponents},pC:function(){return MDXContext}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents:allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components:components,children:children,disableParentContext:disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./projects/soe-angular/src/stories/Textarea.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Disabled:function(){return Disabled},Required:function(){return Required},Validation:function(){return Validation},WithInfo:function(){return WithInfo}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-input.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-tooltip.mjs");const meta={title:"Components/Textarea",component:_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__.k0,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__.x4,_angular_forms__WEBPACK_IMPORTED_MODULE_6__.UX,_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.Ps,_angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_8__.AA]})],parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Default={render:args=>({props:args,template:`\n      <mat-form-field appearance="outline">\n        <mat-label>Label</mat-label>\n        <textarea \n          matInput \n          placeholder="${args.placeholder}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n        ></textarea>\n      </mat-form-field>`}),argTypes:{disabled:{description:"Whether the textarea is disabled.",table:{type:{summary:"boolean"}}},required:{description:"Whether the textarea is required.",table:{type:{summary:"boolean"}}},placeholder:{description:"Placeholder of the textarea.",table:{type:{summary:"string"}}}},args:{disabled:!1,required:!1,placeholder:""}},Required={...Default,args:{...Default.args,required:!0}},Disabled={...Default,args:{...Default.args,disabled:!0}},Validation={render:args=>({props:{args:args,inputValidation:new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NI("",[_angular_forms__WEBPACK_IMPORTED_MODULE_6__.kI.required])},template:`\n        <mat-form-field appearance="outline">\n          <mat-label>Label</mat-label>\n          <textarea \n            [formControl]="inputValidation"\n            matInput \n            placeholder="${args.placeholder}" \n            required="${args.required}" \n          ></textarea>\n          <mat-error *ngIf="inputValidation.hasError('required')">Validation message</mat-error>\n        </mat-form-field>`}),args:{required:!1,placeholder:""}},WithInfo={...Default,render:args=>({props:args,template:`\n      <mat-form-field appearance="outline">\n        <mat-label>Label</mat-label>\n        <textarea \n          matInput \n          placeholder="${args.placeholder}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n        ></textarea>\n        <mat-icon matSuffix matTooltip="Some Tooltip" color="soe-info">info</mat-icon>\n      </mat-form-field>`}),args:{...Default.args}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./projects/soe-angular/src/stories/Textarea.mdx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__);__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./projects/soe-angular/src/stories/Textarea.stories.ts");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.h_,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("link",{rel:"stylesheet",type:"text/css",href:"..//assets/docs-style.css"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{class:"fin-header",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h1",{class:"fin-gradient-text",children:"Textarea"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.Required}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.Validation}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.Xz,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.WithInfo}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"properties",children:"Properties"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_4__.ZX,{of:_Textarea_stories__WEBPACK_IMPORTED_MODULE_2__.Default})]})}__webpack_exports__.default=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_Users_sime_Documents_design_system_storybook_latest_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.ah)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);