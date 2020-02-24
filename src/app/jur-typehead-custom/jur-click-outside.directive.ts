import { Directive, ElementRef, HostListener, Renderer2, Output, EventEmitter } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[jurClickOutside]'
})
export class JurClickOutsideDirective {

  @Output() jurClickOutside: EventEmitter<any> = new EventEmitter<any>();

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event.target']) onClick(targetElement) {
    const clickedInside = this.elementRef.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.jurClickOutside.emit({ isClickedOutside : true});
    }
  }

}
