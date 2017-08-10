import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({
  selector: '[appToggleDisplay]'
})
export class ToggleDisplayDirective {
  @Output('detectMousePosition') detectMousePosition = new EventEmitter<string>();

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.detectMousePosition.emit('leave');
  };

  @HostListener('mouseenter')
  onMouseEnter() {
    this.detectMousePosition.emit('enter');
  }
}
