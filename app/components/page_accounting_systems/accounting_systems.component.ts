import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-accounting_systems',
	templateUrl: './accounting_systems.component.html',
	providers: [ JQ ]
})

export class AccountingSystemsComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Услуга выбора и внедрения системы учета');
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