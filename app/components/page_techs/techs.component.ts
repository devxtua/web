import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';

@Component({
	moduleId: module.id,
	selector: 'my-techs',
	templateUrl: './techs.component.html',
	// styleUrls: [ './techs.component.css' ]
})

export class TechsComponent implements OnInit {
	constructor(private $: JQ){}
	ngOnInit(): any{
		// this.$.scrollTop();
		window.scrollTo(0, 0);
	}
}