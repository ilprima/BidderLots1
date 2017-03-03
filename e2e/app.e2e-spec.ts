import { BidderLotsPage } from './app.po';

describe('bidder-lots App', function() {
  let page: BidderLotsPage;

  beforeEach(() => {
    page = new BidderLotsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
