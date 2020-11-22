import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-profitability',
	templateUrl: './profitability.component.html',
	providers: [ JQ ]
})

export class ProfitabilityComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Увеличение рентабельности путем оптимизации бизнес процессов');
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