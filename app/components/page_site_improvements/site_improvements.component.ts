import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-site_improvements',
	templateUrl: './site_improvements.component.html',
	providers: [ JQ ]
})

export class SiteImprovementsComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Дороботка сущестующего сайта');
		this.$.scrollTop();
	}
	ngOnChanges(): any{
	}
	ngOnInit(): any {
		this.$.scrollTop();
	}
	ngAfterViewInit(): any {
		// this.$.inlineSvg();
		// this.$.isHomePage();
	}
}