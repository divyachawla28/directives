import { Directive,ElementRef,Renderer2,OnInit,HostListener,HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor: string = 'transparent';
	@Input() highlightColor: string = 'blue';
	@HostBinding('style.backgroundColor') color: string = this.defaultColor;

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  ngOnInit(){
  	// this.renderer.addClass(this.elRef.nativeElement,'selected',true);
  	this.color = this.defaultColor;
  }

  @HostListener('mouseenter') mounseenter(eventData: Event) {
  	  	// this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue');
  	  	this.color = this.highlightColor;
  }
  


  @HostListener('mouseleave') mounseleave(eventData: Event) {
  	  	// this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent');
  	  	this.color = this.defaultColor;

  }
  
}
