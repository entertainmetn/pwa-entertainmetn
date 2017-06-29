import { Xstr.MePage } from './app.po';

describe('xstr.me App', () => {
  let page: Xstr.MePage;

  beforeEach(() => {
    page = new Xstr.MePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to xstr!!');
  });
});
