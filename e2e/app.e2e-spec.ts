import { DuyMyzonePage } from './app.po';

describe('duy-myzone App', () => {
  let page: DuyMyzonePage;

  beforeEach(() => {
    page = new DuyMyzonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
