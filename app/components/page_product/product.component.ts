import { Component, OnInit } from '@angular/core';
import { Title} from '@angular/platform-browser';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-product',
	templateUrl: './product.component.html',
	providers: [ JQ ]
})

export class ProductComponent implements OnInit{
	constructor(title: Title, private $: JQ) {
		title.setTitle('Продвиженеи продукта TakiDa.club');
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