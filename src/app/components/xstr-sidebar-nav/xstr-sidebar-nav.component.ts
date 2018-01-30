import { Component, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

// Import navigation elements
import { navigation } from './../../_nav';

@Component({
  selector: 'xstr-sidebar-nav',
  template: `
    <nav class="sidebar-nav">
      <ul class="nav">
        <ng-template ngFor let-navitem [ngForOf]="navigation">
          <li *ngIf="isDivider(navitem)" class="nav-divider"></li>
          <ng-template [ngIf]="isTitle(navitem)">
            <xstr-sidebar-nav-title [title]='navitem'></xstr-sidebar-nav-title>
          </ng-template>
          <ng-template [ngIf]="!isDivider(navitem)&&!isTitle(navitem)">
            <xstr-sidebar-nav-item [item]='navitem'></xstr-sidebar-nav-item>
          </ng-template>
        </ng-template>
      </ul>
    </nav>`
})
export class XstrSidebarNavComponent {

  public navigation = navigation;

  public isDivider(item) {
    return item.divider ? true : false
  }

  public isTitle(item) {
    return item.title ? true : false
  }

  constructor() { }
}

import { Router } from '@angular/router';

@Component({
  selector: 'xstr-sidebar-nav-item',
  template: `
    <li *ngIf="!isDropdown(); else dropdown" [ngClass]="hasClass() ? 'nav-item ' + item.class : 'nav-item'">
      <xstr-sidebar-nav-link [link]='item'></xstr-sidebar-nav-link>
    </li>
    <ng-template #dropdown>
      <li [ngClass]="hasClass() ? 'nav-item nav-dropdown ' + item.class : 'nav-item nav-dropdown'"
          [class.open]="isActive()"
          routerLinkActive="open"
          xstrNavDropdown>
        <xstr-sidebar-nav-dropdown [link]='item'></xstr-sidebar-nav-dropdown>
      </li>
    </ng-template>
    `
})
export class XstrSidebarNavItemComponent {
  @Input() item: any;

  public hasClass() {
    return this.item.class ? true : false
  }

  public isDropdown() {
    return this.item.children ? true : false
  }

  public thisUrl() {
    return this.item.url
  }

  public isActive() {
    return this.router.isActive(this.thisUrl(), false)
  }

  constructor( private router: Router )  { }

}

@Component({
  selector: 'xstr-sidebar-nav-link',
  template: `
    <a *ngIf="!isExternalLink(); else external"
      [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'"
      routerLinkActive="active"
      [routerLink]="[link.url]">
      <em *ngIf="isIcon()" class="{{ link.icon }}"></em>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ng-template #external>
      <a [ngClass]="hasVariant() ? 'nav-link nav-link-' + link.variant : 'nav-link'" href="{{link.url}}">
        <em *ngIf="isIcon()" class="{{ link.icon }}"></em>
        {{ link.name }}
        <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
      </a>
    </ng-template>
  `
})
export class XstrSidebarNavLinkComponent {
  @Input() link: any;

  public hasVariant() {
    return this.link.variant ? true : false
  }

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isExternalLink() {
    return this.link.url.substring(0, 4) === 'http' ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  constructor() { }
}

@Component({
  selector: 'xstr-sidebar-nav-dropdown',
  template: `
    <a class="nav-link nav-dropdown-toggle" xstrNavDropdownToggle>
      <em *ngIf="isIcon()" class="{{ link.icon }}"></em>
      {{ link.name }}
      <span *ngIf="isBadge()" [ngClass]="'badge badge-' + link.badge.variant">{{ link.badge.text }}</span>
    </a>
    <ul class="nav-dropdown-items">
      <ng-template ngFor let-child [ngForOf]="link.children">
        <xstr-sidebar-nav-item [item]='child'></xstr-sidebar-nav-item>
      </ng-template>
    </ul>
  `
})
export class XstrSidebarNavDropdownComponent {
  @Input() link: any;

  public isBadge() {
    return this.link.badge ? true : false
  }

  public isIcon() {
    return this.link.icon ? true : false
  }

  constructor() { }
}

@Component({
  selector: 'xstr-sidebar-nav-title',
  template: ''
})
export class XstrSidebarNavTitleComponent implements OnInit {
  @Input() title: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    const nativeElement: HTMLElement = this.el.nativeElement;
    const li = this.renderer.createElement('li');
    const name = this.renderer.createText(this.title.name);

    this.renderer.addClass(li, 'nav-title');

    if ( this.title.class ) {
      const classes = this.title.class;
      this.renderer.addClass(li, classes);
    }

    if ( this.title.wrapper ) {
      const wrapper = this.renderer.createElement(this.title.wrapper.element);

      this.renderer.appendChild(wrapper, name);
      this.renderer.appendChild(li, wrapper);
    } else {
      this.renderer.appendChild(li, name);
    }
    this.renderer.appendChild(nativeElement, li)
  }
}

export const XSTR_SIDEBAR_NAV = [
  XstrSidebarNavComponent,
  XstrSidebarNavDropdownComponent,
  XstrSidebarNavItemComponent,
  XstrSidebarNavLinkComponent,
  XstrSidebarNavTitleComponent,
];
