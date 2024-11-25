const { Builder, By, Key, until } = require('selenium-webdriver');
const assert = require('assert');

describe('Combined Tests', function() {
  this.timeout(60000);
  let driver;
  let vars;

  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });

  afterEach(async function() {
    await driver.quit();
  });

  // Failed Test
  it('Failed', async function() {
    await driver.get("https://www.adidas.co.in/");
    await driver.manage().window().setRect({ width: 1296, height: 688 });
    {
      const element = await driver.findElement(By.css(".\\_input_1f3oz_13"));
      await driver.actions().move({ origin: element }).perform();
    }
    {
      const element = await driver.findElement(By.css(".\\_user_icon_xw3y3_1"));
      await driver.actions().move({ origin: element }).perform();
    }
    {
      const element = await driver.findElement(By.css("body"));
      await driver.actions().move({ origin: element, x: 0, y: 0 }).perform();
    }
    {
      const element = await driver.findElement(By.css(".\\_user_icon_xw3y3_1 > .gl-icon__wrapper"));
      await driver.actions().move({ origin: element }).perform();
    }
    {
      const element = await driver.findElement(By.css("body"));
      await driver.actions().move({ origin: element, x: 0, y: 0 }).perform();
    }
  });

  // Search Test
  it('Search', async function() {
    await driver.get("https://www.adidas.co.in/");
    await driver.manage().window().setRect({ width: 1296, height: 688 });
    await driver.findElement(By.css(".\\_input_1f3oz_13")).click();
    await driver.findElement(By.css(".\\_input_1f3oz_13")).sendKeys("laptops");
    await driver.findElement(By.css(".\\_input_1f3oz_13")).sendKeys(Key.ENTER);
    await driver.findElement(By.css(".with-filter-panel-cta___3Qa9F .row")).click();
    {
      const element = await driver.findElement(By.css(".plp-results-page___22Rwb"));
      await driver.actions().doubleClick(element).perform();
    }
    await driver.executeScript("window.scrollTo(0,0)");
    await driver.wait(until.elementLocated(By.css("#gl-modal__close-mf-account-portal > .gl-icon__wrapper")), 10000);
    {
      const element = await driver.findElement(By.css("#gl-modal__close-mf-account-portal > .gl-icon__wrapper"));
      await driver.actions().move({ origin: element }).perform();
    }
    await driver.findElement(By.css("#gl-modal__close-mf-account-portal > .gl-icon__wrapper")).click();
    {
      const element = await driver.findElement(By.css(".variation___tBgJN:nth-child(2) > img"));
      await driver.actions().move({ origin: element }).perform();
    }
    {
      const element = await driver.findElement(By.css("body"));
      await driver.actions().move({ origin: element, x: 0, y: 0 }).perform();
    }
    {
      const element = await driver.findElement(By.css(".variation___tBgJN:nth-child(2) > img"));
      await driver.actions().move({ origin: element }).perform();
    }
    {
      const element = await driver.findElement(By.css("body"));
      await driver.actions().move({ origin: element, x: 0, y: 0 }).perform();
    }
  });
});