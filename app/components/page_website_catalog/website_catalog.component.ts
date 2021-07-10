import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-website_catalog',
	templateUrl: './website_catalog.component.html',
	providers: [ JQ ]
})

export class Website_catalogComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Разработка каталогов TakiDa.club');
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