import { Demo0822Page } from './app.po';

describe('demo0822 App', function() {
  let page: Demo0822Page;

  beforeEach(() => {
    page = new Demo0822Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
