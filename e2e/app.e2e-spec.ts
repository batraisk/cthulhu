import { CthulhuPage } from './app.po';

describe('cthulhu App', () => {
  let page: CthulhuPage;

  beforeEach(() => {
    page = new CthulhuPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
