import { FrontRestaurantePage } from './app.po';

describe('front-restaurante App', function() {
  let page: FrontRestaurantePage;

  beforeEach(() => {
    page = new FrontRestaurantePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
