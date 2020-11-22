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
var DatabaseComponent = (function () {
    function DatabaseComponent(title, $) {
        this.$ = $;
        title.setTitle('Обслужевание баз даных');
        this.$.scrollTop();
    }
    DatabaseComponent.prototype.ngOnChanges = function () {
    };
    DatabaseComponent.prototype.ngOnInit = function () {
        this.$.scrollTop();
    };
    DatabaseComponent.prototype.ngAfterViewInit = function () {
        // this.$.inlineSvg();
        // this.$.isHomePage();
    };
    return DatabaseComponent;
}());
DatabaseComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-database',
        templateUrl: './database.component.html',
        providers: [_jquery_1.JQ]
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], DatabaseComponent);
exports.DatabaseComponent = DatabaseComponent;
var _a;
//# sourceMappingURL=database.component.js.map