import { expect } from 'chai';
import { browser, by, element, until } from 'protractor';

export class AppPage {

  public navigateTo() {
    return browser.get('/');
  }

  public enterSearchInput(text: string) {
    return element(by.css('input[aria-label="search"]'))
      .sendKeys(text);
  }

  public expectSomeSearchResults() {
    const condition = until.elementLocated(by.css('.search-results'));

    return browser.wait(condition, 5000)
      .then((value) => {
        expect(value).to.be.any;
      });
  }

}
