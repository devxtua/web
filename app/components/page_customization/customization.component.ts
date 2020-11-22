import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-customization',
	templateUrl: './customization.component.html',
	providers: [ JQ ]
})

export class СustomizationComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Насторойка программного обеспичения');
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