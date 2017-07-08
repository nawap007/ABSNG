import { ABSNGPage } from './app.po';

describe('absng App', () => {
  let page: ABSNGPage;

  beforeEach(() => {
    page = new ABSNGPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
