import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-simple_software',
	templateUrl: './simple_software.component.html',
	providers: [ JQ ]
})

export class SimpleSoftwareComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Простой софт программы складского учета');
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