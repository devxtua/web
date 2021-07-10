import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-website_store',
	templateUrl: './website_store.component.html',
	providers: [ JQ ]
})

export class Website_storeComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Интернет магазина под ключ с TakiDa.club');
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