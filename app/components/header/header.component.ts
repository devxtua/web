import { Component } from '@angular/core';

@Component({
	selector: 'my-header',
	templateUrl: 'app/components/header/header.component.html'
})

export class HeaderComponent {
	mainMenu: any[]
	constructor() {
		this.mainMenu = [
			// {
			// 	title: 'Маркетинг',
			// 	link: '/'
			// },
			{
				title: 'Услуги',
				link: '/'
			},
			{
				title: 'Контакты',
				link: '/contacts'
			},
		]
	}
 }
