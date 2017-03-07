import { QutisAngularcliPage } from './app.po';

describe('qutis-angularcli App', function() {
  let page: QutisAngularcliPage;

  beforeEach(() => {
    page = new QutisAngularcliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
