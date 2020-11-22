import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-installation',
	templateUrl: './installation.component.html',
	providers: [ JQ ]
})

export class InstallationComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Уcтaнoвĸa oпepaциoнныx cиcтeм и программного обеспечения');
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