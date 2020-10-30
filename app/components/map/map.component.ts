import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { OnInit } from '@angular/core';
declare var jQuery: any;

@Component({
	selector: 'my-map',
	template: `<div class="location_wrap location_wrap_js">
					<div class="overlay overlay_js"></div>
				</div>`
})

export class MapComponent implements OnInit {
	constructor(private elRef: ElementRef){}

	ngOnInit(): any {
		jQuery(this.elRef.nativeElement).find('.location_wrap_js').append('<div class="col-xs-12 col-md-6 grid_mod"><iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7555.446639281646!2d30.642204182747136!3d46.43824476451315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6328556c83529%3A0xe977ea4a3527594!2z0YPQuy4g0JHQsNC30L7QstCw0Y8sIDEzLCDQntC00LXRgdGB0LAsINCe0LTQtdGB0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsIDY1MDAw!5e0!3m2!1sru!2sua!4v1604087994604!5m2!1sru!2sua" width=" ' + (jQuery(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe></div>');
		jQuery(this.elRef.nativeElement).find('.location_wrap_js').append('<div class="col-xs-12 col-md-6 grid_mod"><iframe class="studio_location" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2564.5001938704663!2d36.30183145158996!3d50.00197934330715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4127a0aa6410e0c5%3A0x32a5a8f1b87e5dd!2z0YPQuy4g0JDQutCw0LTQtdC80LjQutCwINCf0LDQstC70L7QstCwLCAxNTEsINCl0LDRgNGM0LrQvtCyLCDQpdCw0YDRjNC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCA2MTE2MQ!5e0!3m2!1sru!2sua!4v1602761952022!5m2!1sru!2sua" width=" ' + (jQuery(window).outerWidth() - 20) + ' " height="450" frameborder="0" style="border:0" allowfullscreen scrolling="no"></iframe></div>');

		jQuery(this.elRef.nativeElement).find('.overlay_js').click(function(event){
			jQuery(this).removeClass('overlay');
		});
	}
}
