"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[3437],{"./projects/soe-angular/src/stories/Input.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Disabled:function(){return Disabled},Readonly:function(){return Readonly},Validation:function(){return Validation},WithHint:function(){return WithHint},WithInfo:function(){return WithInfo}});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_public_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./projects/soe-angular/src/public_api.ts"),_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-input.mjs"),_angular_forms__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),_angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-tooltip.mjs");const meta={title:"Components/Input",component:_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__.k0,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.zH.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_public_api__WEBPACK_IMPORTED_MODULE_1__.QK.forRoot()),(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__.BrowserAnimationsModule)]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,_angular_material_legacy_input__WEBPACK_IMPORTED_MODULE_2__.x4,_angular_material_icon__WEBPACK_IMPORTED_MODULE_6__.Ps,_angular_material_legacy_tooltip__WEBPACK_IMPORTED_MODULE_7__.AA,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.u5,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.UX]})],parameters:{layout:"centered"}};__webpack_exports__.default=meta;const Default={render:args=>({props:args,template:`\n      <mat-form-field>\n        <mat-label>Label</mat-label>\n        <input \n          matInput \n          placeholder="${args.placeholder}" \n          value="${args.value}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n        >\n      </mat-form-field>`}),argTypes:{value:{description:"Value of the date input.",table:{type:{summary:"string"}}},disabled:{description:"Whether the input is disabled.",table:{type:{summary:"boolean"}}},required:{description:"Whether the input is required.",table:{type:{summary:"boolean"}}},placeholder:{description:"Placeholder of the input.",table:{type:{summary:"string"}}}},args:{value:"",disabled:!1,placeholder:"",required:!0}},Disabled={...Default,args:{...Default.args,disabled:!0}},Readonly={...Default,render:args=>({props:args,template:`\n      \x3c!-- add readonly class manually until this issue is closed: https://github.com/angular/components/issues/15809 --\x3e\n      <mat-form-field class="mat-form-field-readonly">\n        <mat-label>Label</mat-label>\n        <input \n          matInput \n          placeholder="${args.placeholder}" \n          value="${args.value}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n          readonly\n        >\n      </mat-form-field>`}),args:{...Default.args,value:"Value"}},Validation={...Default,render:args=>({props:{args:args,inputValidation:new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NI("",[_angular_forms__WEBPACK_IMPORTED_MODULE_8__.kI.required,_angular_forms__WEBPACK_IMPORTED_MODULE_8__.kI.email])},template:`\n        <mat-form-field>\n          <mat-label>Label</mat-label>\n          <input \n            matInput \n            placeholder="${args.placeholder}" \n            value="${args.value}" \n            required="${args.required}" \n            disabled="${args.disabled}"\n            [formControl]="inputValidation"\n          >\n          <mat-error *ngIf="inputValidation.hasError('required') || inputValidation.hasError('email')">Validation message</mat-error>\n        </mat-form-field>`})},WithInfo={...Default,render:args=>({props:args,template:`\n      <mat-form-field>\n        <mat-label>Label</mat-label>\n        <input \n          matInput \n          placeholder="${args.placeholder}" \n          value="${args.value}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n        >\n        <mat-icon matSuffix matTooltip="Some Tooltip" color="soe-info">info</mat-icon>\n      </mat-form-field>`})},WithHint={...Default,render:args=>({props:args,template:`\n      <mat-form-field>\n        <mat-label>Label</mat-label>\n        <input \n          matInput \n          placeholder="${args.placeholder}" \n          value="${args.value}" \n          required="${args.required}" \n          disabled="${args.disabled}"\n        >\n        <mat-hint>Some hint</mat-hint>\n      </mat-form-field>`})}}}]);