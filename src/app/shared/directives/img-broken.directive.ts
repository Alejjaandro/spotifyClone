import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @Input() customImage: string = ''

  @HostListener('error') handleError(): void {
    const nativeElement = this.host.nativeElement
    console.log('fasggsdfga -->', this.host);
    nativeElement.src = this.customImage
  }

  constructor(private host: ElementRef) {}

}
