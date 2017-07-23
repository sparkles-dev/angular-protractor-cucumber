import { defineSupportCode } from 'cucumber';
import { AppPage } from './app.po';

defineSupportCode(({Given, When, Then}) => {
  const app = new AppPage();

  Given('I am on the angular.io site',
    () => app.navigateTo());

  When('I type "{term}" into the search input field',
    (text: string) => app.enterSearchInput(text));

  Then('I should see some results in the search overlay',
    () => app.expectSomeSearchResults());
});
