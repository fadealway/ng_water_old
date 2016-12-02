import { NgWaterPage } from './app.po';

describe('ng-water App', function() {
  let page: NgWaterPage;

  beforeEach(() => {
    page = new NgWaterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
