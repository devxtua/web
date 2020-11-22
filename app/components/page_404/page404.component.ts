import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-404',
	templateUrl: './page404.component.html',
	providers: [JQ]
})

export class NotFoundComponent implements OnInit {
	constructor(title: Title, private $: JQ) {
		title.setTitle('404 страница не найдена');
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

