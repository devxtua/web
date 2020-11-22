import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';

declare var jQuery: any;

@Component({
	moduleId: module.id,
	selector: 'my-contacts',
	templateUrl: './contacts.component.html'
})

export class ContactsComponent implements OnInit{
	constructor(title: Title, private $: JQ){
		title.setTitle('Контакты TakiDa.club');
	}
	ngAfterViewInit(): any{
		this.$.inlineSvg();
		this.$.isHomePage();
	}
	ngOnInit(): any{
		this.$.scrollTop();
	}
}