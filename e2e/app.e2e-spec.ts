import { YatcmNgPage } from './app.po';

describe('yatcm-ng App', () => {
  let page: YatcmNgPage;

  beforeEach(() => {
    page = new YatcmNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
