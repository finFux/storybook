"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[59],{"./projects/soe-angular/src/stories/Checkbox.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Indeterminate:function(){return Indeterminate},Primary:function(){return Primary},Secondary:function(){return Secondary}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-checkbox.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");const meta={title:"Components/Checkbox",component:_angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_2__.FC,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot())]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_material_legacy_checkbox__WEBPACK_IMPORTED_MODULE_2__.Zh]})],parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Primary={render:args=>({props:args,template:`<mat-checkbox [color]="color" [checked]="checked" [disabled]="disabled" [indeterminate]="indeterminate">${args.ngContent}</mat-checkbox>`}),argTypes:{ngContent:{description:"Content of the checkbox element.",table:{type:{summary:"string"}}},checked:{description:"Whether the checkbox is checked.",table:{type:{summary:"boolean"}}},indeterminate:{description:'Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to represent a checkbox with three states, e.g. a checkbox that represents a nested list of checkable items.',table:{type:{summary:"boolean"}}},disabled:{description:"Whether the checkbox is disabled.",table:{type:{summary:"boolean"}}},color:{description:"Theme color palette for the component. Use `primary` or `accent`.",control:"select",options:["primary","accent"],table:{type:{summary:"string"}}}},args:{ngContent:"Checkbox Primary",color:"primary",checked:!0,disabled:!1,indeterminate:!1}},Secondary={...Primary,args:{...Primary.args,color:"accent",value:"Checkbox Secondary",ngContent:"Checkbox Secondary"}},Indeterminate={...Primary,args:{...Primary.args,indeterminate:!0,value:"Checkbox Indeterminate"}}}}]);