"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var _jquery_1 = require("@jquery");
var IP_telephonyComponent = (function () {
    function IP_telephonyComponent(title, $) {
        this.$ = $;
        title.setTitle('Настойка Astérix, IP телефонии');
        this.$.scrollTop();
    }
    IP_telephonyComponent.prototype.ngOnChanges = function () {
    };
    IP_telephonyComponent.prototype.ngOnInit = function () {
        this.$.scrollTop();
    };
    IP_telephonyComponent.prototype.ngAfterViewInit = function () {
        // this.$.inlineSvg();
        // this.$.isHomePage();
    };
    return IP_telephonyComponent;
}());
IP_telephonyComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-ip_telephony',
        templateUrl: './ip_telephony.component.html',
        providers: [_jquery_1.JQ]
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], IP_telephonyComponent);
exports.IP_telephonyComponent = IP_telephonyComponent;
var _a;
//# sourceMappingURL=ip_telephony.component.js.map