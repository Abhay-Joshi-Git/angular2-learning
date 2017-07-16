import { OnPushImmutableBasicPage } from './app.po';

describe('on-push-immutable-basic App', () => {
  let page: OnPushImmutableBasicPage;

  beforeEach(() => {
    page = new OnPushImmutableBasicPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
