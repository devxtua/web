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
var MainComponent = (function () {
    function MainComponent(title, $) {
        this.$ = $;
        title.setTitle('Услуги маркетолога, IT-сервис в Харькове Одессе');
    }
    MainComponent.prototype.ngAfterViewInit = function () {
        this.$.isHomePage();
        this.$.inlineSvg();
        this.$.animated_scroll();
        jQuery('.parallax-mirror').remove();
        setTimeout(function () {
            this.$('.services_wrap').parallax({
                imageSrc: '/compiled/img/bg4.jpg',
                overScrollFix: true,
                androidFix: false,
                iosFix: false,
            });
            this.$('.about_studio_wrap').parallax({
                imageSrc: '/compiled/img/bg5.jpg',
                overScrollFix: true,
                androidFix: false,
                iosFix: false,
            });
        }, 1000);
    };
    MainComponent.prototype.ngOnInit = function () {
        this.$.scrollTop();
    };
    MainComponent.prototype.ngOnDestroy = function () {
        jQuery('.parallax-mirror').remove();
    };
    return MainComponent;
}());
MainComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-main',
        templateUrl: './main.component.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], MainComponent);
exports.MainComponent = MainComponent;
var _a;
//# sourceMappingURL=main.component.js.map