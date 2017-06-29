import { XstrMePage } from './app.po';

describe('xstr.me App', () => {
  let page: XstrMePage;

  beforeEach(() => {
    page = new XstrMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to xstr!!');
  });
});
