import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // tslint:disable-next-line:max-line-length
  selector: '[xstrHostReplace], xstr-aside, xstr-breadcrumbs, xstr-footer, xstr-header, xstr-sidebar, xstr-sidebar-footer, xstr-sidebar-form, xstr-sidebar-header, xstr-sidebar-minimizer, xstr-sidebar-nav, xstr-sidebar-nav-dropdown, xstr-sidebar-nav-item, xstr-sidebar-nav-link, xstr-sidebar-nav-title'
})
export class ReplaceDirective implements OnInit {

  constructor(private el: ElementRef) { }

  // wait for the component to render completely
  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const parentElement: HTMLElement = nativeElement.parentElement;
    // move all children out of the element
    while (nativeElement.firstChild) {
      parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    // remove the empty element(the host)
    parentElement.removeChild(nativeElement);
  }
}
