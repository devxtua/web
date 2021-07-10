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
// var environment = 'app/components/owl_reviews/' + template +'.component.html';
var key = 1;
switch (key) {
    case 1:
        var tmp = 'app/components/owl_reviews/owl_reviews.component.html';
        break;
    default:
        break;
}
var OwlReviewsComponent = (function () {
    function OwlReviewsComponent(elRef) {
        this.elRef = elRef;
    }
    OwlReviewsComponent.prototype.ngOnInit = function () {
        jQuery(this.elRef.nativeElement).ready(function () {
            jQuery(this).find("#owl-reviews").owlCarousel({
                slideSpeed: 300,
                paginationSpeed: 400,
                singleItem: true,
                mouseDrag: false,
                autoPlay: 12000,
                stopOnHover: false,
                autoHeight: false,
                transitionStyle: "fade"
            });
        });
    };
    return OwlReviewsComponent;
}());
OwlReviewsComponent = __decorate([
    core_1.Component({
        selector: 'owl-reviews',
        // templateUrl: 'app/components/owl_reviews/owl_reviews.component.html',
        // templateUrl: 'app/components/owl_reviews/' + this->template + '.component.html',
        templateUrl: tmp,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], OwlReviewsComponent);
exports.OwlReviewsComponent = OwlReviewsComponent;
//# sourceMappingURL=owl_reviews.component.js.map