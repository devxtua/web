import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-ip_telephony',
	templateUrl: './ip_telephony.component.html',
	providers: [ JQ ]
})

export class IP_telephonyComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Настойка Astérix, IP телефонии');
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