import { browser, by, element } from 'protractor';

export class XstrMePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xstr-home p')).getText();
  }
}
