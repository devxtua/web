import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-database',
	templateUrl: './database.component.html',
	providers: [ JQ ]
})

export class DatabaseComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Обслужевание баз даных');
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