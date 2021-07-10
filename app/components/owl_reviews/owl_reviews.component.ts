import { Component, ElementRef, OnInit } from '@angular/core';


// import { Slide } from './slide';
// import { SlidesService } from './slides.service';

declare var jQuery: any;
// var environment = 'app/components/owl_reviews/' + template +'.component.html';
var key  = 1;
switch (key) {
	case 1:
		var tmp = 'app/components/owl_reviews/owl_reviews.component.html';
		break;

	default:
		
		break;
}




@Component({
	selector: 'owl-reviews',
	// templateUrl: 'app/components/owl_reviews/owl_reviews.component.html',
	// templateUrl: 'app/components/owl_reviews/' + this->template + '.component.html',
	templateUrl: tmp,
	// providers: [],
	// template: `<template [ngTemplateOutlet]="templ" [ngOutletContext]="{isVisible: true}"></template>

})

export class OwlReviewsComponent implements OnInit {
	slides: Array<Object>;
	errorMessage: string;
	constructor(
		private elRef: ElementRef
	){

	}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).ready(function(){
			jQuery(this).find("#owl-reviews").owlCarousel({
				slideSpeed: 300,
				paginationSpeed: 400,
				singleItem:true,
				mouseDrag: false,
				autoPlay: 12000,
				stopOnHover: false,
				autoHeight: false,
				transitionStyle: "fade"
			});
		});
	}
}
