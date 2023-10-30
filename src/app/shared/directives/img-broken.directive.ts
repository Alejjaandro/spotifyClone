import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: 'img[appImgBroken]',
    standalone: true
})
export class ImgBrokenDirective {

  @Input() customImage: string = ''

  @HostListener('error') handleError(): void {
    const nativeElement = this.host.nativeElement
    console.log('This image is broken -->', this.host);
    nativeElement.src = this.customImage
  }

  constructor(private host: ElementRef) {}

}
