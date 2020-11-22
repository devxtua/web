import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-chat_bots',
	templateUrl: './chat_bots.component.html',
	providers: [ JQ ]
})

export class Chat_botsComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Разработка чат ботов Viber Telegram Whatsapp');
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