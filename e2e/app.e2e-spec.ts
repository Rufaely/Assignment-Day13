import { AssignmentDay13Page } from './app.po';

describe('assignment-day13 App', () => {
  let page: AssignmentDay13Page;

  beforeEach(() => {
    page = new AssignmentDay13Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
