import { Component, OnInit } from '@angular/core';
import { JQ } from '@jquery';
declare var $: any;

@Component({
	moduleId: module.id,
	selector: 'my-services',
	templateUrl: './services.component.html',
	providers: [ JQ ]
})

export class ServicesComponent implements OnInit{
	constructor(private $: JQ) {
	}
	ngOnInit(): any{
		// $('html, body').animate({ scrollTop: '0' }, 500);
		// $('body').scrollTop(0);
		if(window.location.hash.length > 0){
			$('html, body').scrollTop($(window.location.hash).offset().top - 120);
			$(window.location.hash).trigger('click');
		}
		this.$.inlineSvg();

		function ScrollSpy(obj){
		  this.handlers = obj.find('.spy_handler');
		  this.scrollTop = $(window).scrollTop();
		  this.spy = function(){
		    var parent = this;
		    parent.scrollTop = $(window).scrollTop() + 120;
		    parent.handlers.each(function(){
		      if($(this.hash).offset().top <= parent.scrollTop && $(this.hash).offset().top + $(this.hash).outerHeight() > parent.scrollTop){
		        parent.activate(this);
		      }
		    });
		  }

		  // this.activate = function(obj){
		  //   this.deactivate();
		  //   $(obj).closest('li').addClass('active');
		  // }
		  // this.deactivate = function(){
		  //   this.handlers.each(function(){
		  //     $(this).closest('li').removeClass('active');
		  //   });
		  // }
		}
		var spy = new ScrollSpy($('#magic_scroll'));
		$(window).scroll(function(){
		  spy.spy();
		});
	}
	ngOnDestroy() {
  	  $(window).unbind();
	  }
	ngAfterViewInit(): any {
		this.$.inlineSvg();
		this.$.isHomePage();
	}
}