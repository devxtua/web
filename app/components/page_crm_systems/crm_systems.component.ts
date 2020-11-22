import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-crm_systems',
	templateUrl: './crm_systems.component.html',
	providers: [ JQ ]
})

export class CRMsystemsComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Внедрение CRM систем');
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