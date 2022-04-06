import { AppPage } from './app.po';
import { browser, logging } from 'protractor';


describe('Lab test app', () => {
  let Apage: AppPage;

  beforeEach(() => {
    Apage = new AppPage();
  });

  it('Welcome Message', async () => {
    await Apage.navigateTo();
    expect(await Apage.getTitleText()).toEqual('App is running!');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
