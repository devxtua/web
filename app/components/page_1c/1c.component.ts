import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-1c',
	templateUrl: './1c.component.html',
	providers: [ JQ ]
})

export class C1CComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Услуги программиста 1С');
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