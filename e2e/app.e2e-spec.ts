import { XstrMePage } from './app.po';

describe('xstr.me App', () => {
  let page: XstrMePage;

  beforeEach(() => {
    page = new XstrMePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('home works!');
/* keep old promise methode just in case
    it('should display welcome message', (done) => {
      page.navigateTo();
      page.getParagraphText()
        .then((msg) => expect(msg).toEqual('home works!'))
        .then(done, done.fail);
        */
  });
});
