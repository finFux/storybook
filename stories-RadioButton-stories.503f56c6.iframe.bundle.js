"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[3709],{"./projects/soe-angular/src/stories/RadioButton.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:function(){return Disabled},Primary:function(){return Primary},RadioGroup:function(){return RadioGroup},Secondary:function(){return Secondary}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-radio.mjs");const meta={title:"Components/Radio Button",component:_angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_2__.vy,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot())]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,_angular_material_legacy_radio__WEBPACK_IMPORTED_MODULE_2__.Xo]})],parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Primary={render:args=>({props:args,template:`\n      <mat-radio-button \n        color="${args.color}" \n        disabled="${args.disabled}"\n        checked="${args.checked}"\n        value="${args.value}"\n      >${args.value}</mat-radio-button>\n    `}),argTypes:{color:{description:"Theme color palette for the component. Use `primary` or `accent`.",control:"select",options:["primary","accent"],table:{type:{summary:"string"}}},disabled:{description:"Whether the radio button is disabled.",table:{type:{summary:"boolean"}}},checked:{description:"Whether the radio button is checked.",table:{type:{summary:"boolean"}}},value:{description:"Value of the radio button.",tabel:{type:{type:{summary:"string"}}}}},args:{value:"Radio Button",color:"primary",disabled:!1,checked:!0}},Secondary={...Primary,args:{...Primary.args,color:"accent"}},Disabled={...Primary,args:{...Primary.args,disabled:!0}},RadioGroup={render:args=>({props:args,template:`\n      <mat-radio-group disabled="${args.disabled}">\n        <mat-radio-button name="radio-group" color="primary" value="One">One</mat-radio-button>\n        <mat-radio-button name="radio-group" color="primary" value="Two">Two</mat-radio-button>\n        <mat-radio-button name="radio-group" color="primary" value="Three">Three</mat-radio-button>\n      </mat-radio-group>\n    `}),args:{disabled:!1}}}}]);