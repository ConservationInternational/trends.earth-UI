import { TrendsEarthPage } from './app.po';

describe('trendsearth-ui App', () => {
  let page: TrendsEarthPage;

  beforeEach(() => {
    page = new TrendsEarthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
