"use strict";(self.webpackChunksoe_demo=self.webpackChunksoe_demo||[]).push([[2093],{"./projects/soe-angular/src/stories/Datepicker.stories.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},Disabled:function(){return Disabled},Readonly:function(){return Readonly},Validation:function(){return Validation},WithHint:function(){return WithHint},WithInfo:function(){return WithInfo},default:function(){return Datepicker_stories}});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),public_api=__webpack_require__("./projects/soe-angular/src/public_api.ts"),legacy_input=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-input.mjs"),datepicker=__webpack_require__("./node_modules/@angular/material/fesm2022/datepicker.mjs"),fesm2022_core=__webpack_require__("./node_modules/@angular/material/fesm2022/core.mjs"),moment=__webpack_require__("./node_modules/moment/moment.js");const material_moment_adapter_moment=__webpack_require__.n(moment)()||moment,MAT_MOMENT_DATE_ADAPTER_OPTIONS=new core.InjectionToken("MAT_MOMENT_DATE_ADAPTER_OPTIONS",{providedIn:"root",factory:function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY(){return{useUtc:!1}}});function range(length,valueFunction){const valuesArray=Array(length);for(let i=0;i<length;i++)valuesArray[i]=valueFunction(i);return valuesArray}class MomentDateAdapter extends fesm2022_core._A{constructor(dateLocale,_options){super(),this._options=_options,this.setLocale(dateLocale||material_moment_adapter_moment.locale())}setLocale(locale){super.setLocale(locale);let momentLocaleData=material_moment_adapter_moment.localeData(locale);this._localeData={firstDayOfWeek:momentLocaleData.firstDayOfWeek(),longMonths:momentLocaleData.months(),shortMonths:momentLocaleData.monthsShort(),dates:range(31,(i=>this.createDate(2017,0,i+1).format("D"))),longDaysOfWeek:momentLocaleData.weekdays(),shortDaysOfWeek:momentLocaleData.weekdaysShort(),narrowDaysOfWeek:momentLocaleData.weekdaysMin()}}getYear(date){return this.clone(date).year()}getMonth(date){return this.clone(date).month()}getDate(date){return this.clone(date).date()}getDayOfWeek(date){return this.clone(date).day()}getMonthNames(style){return"long"==style?this._localeData.longMonths:this._localeData.shortMonths}getDateNames(){return this._localeData.dates}getDayOfWeekNames(style){return"long"==style?this._localeData.longDaysOfWeek:"short"==style?this._localeData.shortDaysOfWeek:this._localeData.narrowDaysOfWeek}getYearName(date){return this.clone(date).format("YYYY")}getFirstDayOfWeek(){return this._localeData.firstDayOfWeek}getNumDaysInMonth(date){return this.clone(date).daysInMonth()}clone(date){return date.clone().locale(this.locale)}createDate(year,month,date){if("undefined"==typeof ngDevMode||ngDevMode){if(month<0||month>11)throw Error(`Invalid month index "${month}". Month index has to be between 0 and 11.`);if(date<1)throw Error(`Invalid date "${date}". Date has to be greater than 0.`)}const result=this._createMoment({year:year,month:month,date:date}).locale(this.locale);if(!result.isValid()&&("undefined"==typeof ngDevMode||ngDevMode))throw Error(`Invalid date "${date}" for month with index "${month}".`);return result}today(){return this._createMoment().locale(this.locale)}parse(value,parseFormat){return value&&"string"==typeof value?this._createMoment(value,parseFormat,this.locale):value?this._createMoment(value).locale(this.locale):null}format(date,displayFormat){if(date=this.clone(date),!this.isValid(date)&&("undefined"==typeof ngDevMode||ngDevMode))throw Error("MomentDateAdapter: Cannot format invalid date.");return date.format(displayFormat)}addCalendarYears(date,years){return this.clone(date).add({years:years})}addCalendarMonths(date,months){return this.clone(date).add({months:months})}addCalendarDays(date,days){return this.clone(date).add({days:days})}toIso8601(date){return this.clone(date).format()}deserialize(value){let date;if(value instanceof Date)date=this._createMoment(value).locale(this.locale);else if(this.isDateInstance(value))return this.clone(value);if("string"==typeof value){if(!value)return null;date=this._createMoment(value,material_moment_adapter_moment.ISO_8601).locale(this.locale)}return date&&this.isValid(date)?this._createMoment(date).locale(this.locale):super.deserialize(value)}isDateInstance(obj){return material_moment_adapter_moment.isMoment(obj)}isValid(date){return this.clone(date).isValid()}invalid(){return material_moment_adapter_moment.invalid()}_createMoment(date,format,locale){const{strict:strict,useUtc:useUtc}=this._options||{};return useUtc?material_moment_adapter_moment.utc(date,format,locale,strict):material_moment_adapter_moment(date,format,locale,strict)}static#_=this.ɵfac=function MomentDateAdapter_Factory(t){return new(t||MomentDateAdapter)(core["ɵɵinject"](fesm2022_core.Ad,8),core["ɵɵinject"](MAT_MOMENT_DATE_ADAPTER_OPTIONS,8))};static#_2=this.ɵprov=core["ɵɵdefineInjectable"]({token:MomentDateAdapter,factory:MomentDateAdapter.ɵfac})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MomentDateAdapter,[{type:core.Injectable}],(function(){return[{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[fesm2022_core.Ad]}]},{type:void 0,decorators:[{type:core.Optional},{type:core.Inject,args:[MAT_MOMENT_DATE_ADAPTER_OPTIONS]}]}]}),null);const MAT_MOMENT_DATE_FORMATS={parse:{dateInput:"l"},display:{dateInput:"l",monthYearLabel:"MMM YYYY",dateA11yLabel:"LL",monthYearA11yLabel:"MMMM YYYY"}};class MomentDateModule{static#_=this.ɵfac=function MomentDateModule_Factory(t){return new(t||MomentDateModule)};static#_2=this.ɵmod=core["ɵɵdefineNgModule"]({type:MomentDateModule});static#_3=this.ɵinj=core["ɵɵdefineInjector"]({providers:[{provide:fesm2022_core._A,useClass:MomentDateAdapter,deps:[fesm2022_core.Ad,MAT_MOMENT_DATE_ADAPTER_OPTIONS]}]})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MomentDateModule,[{type:core.NgModule,args:[{providers:[{provide:fesm2022_core._A,useClass:MomentDateAdapter,deps:[fesm2022_core.Ad,MAT_MOMENT_DATE_ADAPTER_OPTIONS]}]}]}],null,null);class MatMomentDateModule{static#_=this.ɵfac=function MatMomentDateModule_Factory(t){return new(t||MatMomentDateModule)};static#_2=this.ɵmod=core["ɵɵdefineNgModule"]({type:MatMomentDateModule,imports:[MomentDateModule]});static#_3=this.ɵinj=core["ɵɵdefineInjector"]({providers:[{provide:fesm2022_core.sG,useValue:MAT_MOMENT_DATE_FORMATS}],imports:[MomentDateModule]})}("undefined"==typeof ngDevMode||ngDevMode)&&core["ɵsetClassMetadata"](MatMomentDateModule,[{type:core.NgModule,args:[{imports:[MomentDateModule],providers:[{provide:fesm2022_core.sG,useValue:MAT_MOMENT_DATE_FORMATS}]}]}],null,null);var icon=__webpack_require__("./node_modules/@angular/material/fesm2022/icon.mjs"),legacy_tooltip=__webpack_require__("./node_modules/@angular/material/fesm2022/legacy-tooltip.mjs"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");var Datepicker_stories={title:"Components/Datepicker",component:legacy_input.k0,decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(public_api.zH.forRoot()),(0,core.importProvidersFrom)(public_api.QK.forRoot()),(0,core.importProvidersFrom)(animations.BrowserAnimationsModule)]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,legacy_input.x4,datepicker.FA,MatMomentDateModule,icon.Ps,legacy_tooltip.AA,fesm2022_forms.UX]})],parameters:{layout:"centered"}};const Default={render:args=>({props:args,template:`\n      <mat-form-field>\n        <input \n          matInput \n          [matDatepicker]="datePicker" \n          placeholder="${args.placeholder}" \n          [required]="${args.required}" \n          [disabled]="${args.disabled}" \n        >\n        <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>\n        <mat-datepicker #datePicker></mat-datepicker>\n      </mat-form-field>`}),argTypes:{disabled:{description:"Whether the datepicker is disabled.",table:{type:{summary:"boolean"}}},required:{description:"Whether the datepicker is required.",table:{type:{summary:"boolean"}}},placeholder:{description:"Placeholder of the datepicker.",table:{type:{summary:"string"}}}},args:{disabled:!1,placeholder:"Label",required:!0}},Disabled={...Default,args:{...Default.args,disabled:!0}},WithHint={render:args=>({props:args,template:`\n      <mat-form-field>\n        <input \n          matInput \n          [matDatepicker]="datePicker" \n          placeholder="${args.placeholder}" \n          [required]="${args.required}" \n          [disabled]="${args.disabled}"\n        >\n        <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>\n        <mat-datepicker #datePicker></mat-datepicker>\n        <mat-hint>Some hint</mat-hint>\n      </mat-form-field>`}),args:{...Default.args}},WithInfo={render:args=>({props:args,template:`\n      <mat-form-field>\n        <input \n          matInput \n          [matDatepicker]="datePicker" \n          placeholder="${args.placeholder}" \n          [required]="${args.required}" \n          [disabled]="${args.disabled}"\n        >\n        <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>\n        <mat-datepicker #datePicker></mat-datepicker>\n        <mat-icon matSuffix matTooltip="Some Tooltip" color="soe-info">info</mat-icon>\n      </mat-form-field>`}),args:{...Default.args}},Validation={...Default,render:args=>({props:{args:args,inputValidation:new fesm2022_forms.NI("",[fesm2022_forms.kI.required])},template:`\n        <mat-form-field>\n          <input \n            matInput \n            [formControl]="inputValidation" \n            [matDatepicker]="datePicker" \n            placeholder="${args.placeholder}" \n            [required]="${args.required}" \n            [disabled]="${args.disabled}"\n          >\n          <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>\n          <mat-datepicker #datePicker></mat-datepicker>\n          <mat-error *ngIf="inputValidation.hasError('required')">Validation message</mat-error>\n        </mat-form-field>`})},Readonly={render:args=>({props:args,template:`\n      \x3c!-- add readonly class manually until this issue is closed: https://github.com/angular/components/issues/15809 --\x3e\n      <mat-form-field class="mat-form-field-readonly">\n        <input \n          matInput \n          readonly\n          [matDatepicker]="datePicker" \n          value="2022-01-01" \n          placeholder="${args.placeholder}" \n          [required]="${args.required}" \n          [disabled]="${args.disabled}"\n        >\n        <mat-datepicker-toggle matSuffix [for]="datePicker"></mat-datepicker-toggle>\n        <mat-datepicker #datePicker></mat-datepicker>\n        <mat-error>Some error</mat-error>\n      </mat-form-field>`}),args:{...Default.args}}}}]);