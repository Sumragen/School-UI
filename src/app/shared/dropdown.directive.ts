import {Directive, ElementRef, HostBinding, HostListener, Renderer2} from '@angular/core';
/**
 * Created by sumragen on 03.08.17.
 */
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  isOpen = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    this.rerender();
  }

  rerender() {
    if (this.isOpen) {
      this.renderer.addClass(this.elementRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    }
  }
}
