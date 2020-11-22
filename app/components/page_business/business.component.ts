import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-business',
	templateUrl: './business.component.html',
	providers: [ JQ ]
})

export class BusinessComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Продвиженеи бизнеса TakiDa.club');
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