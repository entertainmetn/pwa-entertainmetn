import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'xstr-aside',
  templateUrl: './xstr-aside.component.html'
})
export class XstrAsideComponent implements OnInit {

  constructor(private el: ElementRef) { }

  // wait for the component to render completely
  ngOnInit(): void {
    const nativeElement: HTMLElement = this.el.nativeElement,
      parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}