import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFont20px]'
})
export class Font20pxDirective {

  constructor(private element: ElementRef, private render: Renderer2) { 
    // element.nativeElement.style. = '20px';
    element.nativeElement.style.color = 'green';

    render.setStyle(element.nativeElement, 'font-size', '30px');
  }

}
