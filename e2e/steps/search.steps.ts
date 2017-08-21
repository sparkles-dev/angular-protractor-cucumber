import { expect } from 'chai';
import { defineSupportCode } from 'cucumber';
import { AppPage } from './app.po';

defineSupportCode(({Given, When, Then, Before}) => {
  let app: AppPage;

  Before(() => {
    app = new AppPage();
  });

  Given('I am on the angular.io site',
    () => app.navigateTo());

  When('I type {string} into the search input field',
    (text: string) => app.enterSearchInput(text));

  Then('I should see some results in the search overlay',
    () => app.getSearchResultItems()
      .then(elems => expect(elems.length).to.be.greaterThan(0)));

});
