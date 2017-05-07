import { H4kFrontPage } from './app.po';

describe('h4k-front App', () => {
  let page: H4kFrontPage;

  beforeEach(() => {
    page = new H4kFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
