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
var SubscribeFormComponent = (function () {
    function SubscribeFormComponent() {
    }
    SubscribeFormComponent.prototype.addSubscription = function (email) {
        console.log("\u0410\u043A\u0442\u0438\u0432\u0438\u0440\u043E\u0432\u0430\u043D\u0430 \u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430 \u0434\u043B\u044F " + email);
    };
    return SubscribeFormComponent;
}());
SubscribeFormComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'form_subscribe',
        templateUrl: './subscribe.component.html'
    }),
    __metadata("design:paramtypes", [])
], SubscribeFormComponent);
exports.SubscribeFormComponent = SubscribeFormComponent;
//# sourceMappingURL=subscribe.component.js.map