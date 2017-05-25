import { BookAShipment1Page } from './app.po';

describe('book-ashipment1 App', () => {
  let page: BookAShipment1Page;

  beforeEach(() => {
    page = new BookAShipment1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
