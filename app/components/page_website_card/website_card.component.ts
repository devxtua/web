import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-website_card',
	templateUrl: './website_card.component.html',
	providers: [ JQ ]
})

export class Website_cardComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Ленденги, визиток Разработка TakiDa.club');
		this.$.scrollTop();
	}
	ngOnChanges(): any {
	}
	ngOnInit(): any {
		this.$.scrollTop();
	}
	ngAfterViewInit(): any {
		// this.$.inlineSvg();
		// this.$.isHomePage();
	}
}