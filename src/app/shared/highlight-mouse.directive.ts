import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]'
})
export class HighlightMouseDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  @HostListener('mouseenter') onMouseOver() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#000');
    // console.log();
    this.backgroundColor = '#000';
  }

  @HostListener('mouseout') onMouseOut() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#fff');
    // console.log();
    this.backgroundColor = '#fff';
  }

  @HostListener('keyup') onKeyup() {
    console.log(this.elementRef.nativeElement.value);
  }

}
