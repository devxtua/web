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
var ContactsComponent = (function () {
    function ContactsComponent(title, $) {
        this.$ = $;
        title.setTitle('Контакты TakiDa.club');
    }
    ContactsComponent.prototype.ngAfterViewInit = function () {
        this.$.inlineSvg();
        this.$.isHomePage();
    };
    ContactsComponent.prototype.ngOnInit = function () {
        this.$.scrollTop();
    };
    return ContactsComponent;
}());
ContactsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-contacts',
        templateUrl: './contacts.component.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], ContactsComponent);
exports.ContactsComponent = ContactsComponent;
var _a;
//# sourceMappingURL=contacts.component.js.map