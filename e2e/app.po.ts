import { browser, by, element } from 'protractor';

export class Xstr.MePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xstr-root h1')).getText();
  }
}
