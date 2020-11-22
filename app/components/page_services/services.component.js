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
var _jquery_1 = require("@jquery");
var ServicesComponent = (function () {
    function ServicesComponent($) {
        this.$ = $;
    }
    ServicesComponent.prototype.ngOnInit = function () {
        // $('html, body').animate({ scrollTop: '0' }, 500);
        // $('body').scrollTop(0);
        if (window.location.hash.length > 0) {
            $('html, body').scrollTop($(window.location.hash).offset().top - 120);
            $(window.location.hash).trigger('click');
        }
        this.$.inlineSvg();
        function ScrollSpy(obj) {
            this.handlers = obj.find('.spy_handler');
            this.scrollTop = $(window).scrollTop();
            this.spy = function () {
                var parent = this;
                parent.scrollTop = $(window).scrollTop() + 120;
                parent.handlers.each(function () {
                    if ($(this.hash).offset().top <= parent.scrollTop && $(this.hash).offset().top + $(this.hash).outerHeight() > parent.scrollTop) {
                        parent.activate(this);
                    }
                });
            };
            // this.activate = function(obj){
            //   this.deactivate();
            //   $(obj).closest('li').addClass('active');
            // }
            // this.deactivate = function(){
            //   this.handlers.each(function(){
            //     $(this).closest('li').removeClass('active');
            //   });
            // }
        }
        var spy = new ScrollSpy($('#magic_scroll'));
        $(window).scroll(function () {
            spy.spy();
        });
    };
    ServicesComponent.prototype.ngOnDestroy = function () {
        $(window).unbind();
    };
    ServicesComponent.prototype.ngAfterViewInit = function () {
        this.$.inlineSvg();
        this.$.isHomePage();
    };
    return ServicesComponent;
}());
ServicesComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-services',
        templateUrl: './services.component.html',
        providers: [_jquery_1.JQ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof _jquery_1.JQ !== "undefined" && _jquery_1.JQ) === "function" && _a || Object])
], ServicesComponent);
exports.ServicesComponent = ServicesComponent;
var _a;
//# sourceMappingURL=services.component.js.map