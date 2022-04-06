import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('Lab test app', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Welcome Message', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('App is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
