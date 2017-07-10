import { SchoolUIAngularPage } from './app.po';

describe('school-uiangular App', () => {
  let page: SchoolUIAngularPage;

  beforeEach(() => {
    page = new SchoolUIAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
