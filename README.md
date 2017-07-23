APC: Angular, Protractor, Cucumber
==================================

> Feature-driven end-to-end testing.

Demonstrates testing of an [Angular][1] app with [Protractor][2] and [Cucumber][3].

```bash
$ yarn e2e -- --baseUrl https://angular.io
```

Lightning Talk proposal for #ReactiveConf 2017:
https://gist.github.com/dherges/0e2330e9d043a8316961c0709d2e1222



#### Idea and tech stack

Protractor is used as the primary testing framework.
It launches a web browser and allows remote control of the web browser.

Then, [cucumber is plugged-in to protractor][4] and [TypeScript][5] is added as `onPrepare` hook.
Test specifications are written in `.feature` files,
expressing each `Scenario` with the `Given`, `When`, `Then` keywords.

```gherkin
Feature: Search
  As a developer using Angular
  I need to look-up classes and guidelines
  So that I can concentrate on building awesome applications

  Scenario: Type in a search-term
    Given I am on the angular.io site
    When I type "foo" into the search input field
    Then I should see some results in the search overlay
```

Scenarios are turned into automated browser actions in so-called step definitions.
Step definitions are written in TypeScript and use protractor's API to control the browser.
Basically, protractor's API is [an addition on top of selenium-webdriver][6] with specialized methods for handling Angular apps.
When not using the Angular-specific additions, it is however to possible to test any other web app running in the browser.

The actual step definition is:

```ts
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

  When('I type "{term}" into the search input field',
    (text: string) => app.enterSearchInput(text));

  Then('I should see some results in the search overlay',
    () => app.getSearchResultItems()
      .then(elems => {
        expect(elems.length).to.be.greaterThan(0);
      }));
});
```

For test assertions, [chai's expect/should API][7] is a good fit with cucumber.
A `Then` clause expresses expected behaviour or an expected outcome of an operation,
so a call to `expect()` is a fluent way of writing down such an expectation.

Rather than automating the browser right from the step definitions,
the testing code uses the [Page Object pattern](http://www.protractortest.org/#/page-objects).
The advantage here is that CSS selectors or the DOM structure of the application may change.
If we were scripting the browser straight out of the step definitions,
we'd need to update every scenario and every step definition.
With page objects, when the application changes,
just the `AppPage` class needs to be updated to reflect the web app in a proper way:

```ts
import { browser, by, element, until } from 'protractor';

export class AppPage {

  public navigateTo() {
    return browser.get('/');
  }

  public enterSearchInput(text: string) {
    return element(by.css('input[aria-label="search"]'))
      .sendKeys(text);
  }

  public getSearchResultItems() {
    const condition = until.elementsLocated(by.css('.search-results .search-result-item'));

    return browser.wait(condition, 5000);
  }

}
```



[1]: https://angular.io/
[2]: www.protractortest.org
[3]: https://cucumber.io
[4]: https://github.com/protractor-cucumber-framework/protractor-cucumber-framework
[5]: http://www.typescriptlang.org/
[6]: https://www.npmjs.com/package/selenium-webdriver
[7]: http://chaijs.com/api/bdd/


#### Further Reading

Top 5 Cucumber best practices, The Codeship:

[![Top 5 Cucumber best practices -- The Codeship](https://img.youtube.com/vi/prSSc4KYX0o/0.jpg)](https://youtu.be/prSSc4KYX0o)

Protractor styleguide – Carmen Popoviciu and Andres Dominguez, AngularConnect 2015:

[![Protractor styleguide, AngularConnect 2015](https://img.youtube.com/vi/-lTGnYwnEuM/0.jpg)](https://youtu.be/-lTGnYwnEuM)

[Protractor Style Guide](http://www.protractortest.org/#/style-guide)

[Debugging Protractor](http://www.protractortest.org/#/debugging) (pausing a browser, taking snapshots, and more...)

[Protractor API](http://www.protractortest.org/#/api)



#### Transcript

Set Up:

```bash
$ yarn add --dev protractor protractor-cucumber-framework cucumber typescript ts-node chai @types/chai @types/cucumber
yarn add v0.27.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 181 new dependencies.
├─ @types/chai@4.0.1
├─ @types/cucumber@2.0.1
├─ @types/node@6.0.85
├─ @types/q@0.0.32
├─ @types/selenium-webdriver@2.53.42
├─ adm-zip@0.4.7
├─ agent-base@2.1.1
├─ ajv@4.11.8
├─ ansi-regex@2.1.1
├─ ansi-styles@2.2.1
├─ any-promise@1.3.0
├─ array-union@1.0.2
├─ array-uniq@1.0.3
├─ arrify@1.0.1
├─ asn1@0.2.3
├─ assert-plus@1.0.0
├─ assertion-error-formatter@2.0.0
├─ assertion-error@1.0.2
├─ asynckit@0.4.0
├─ aws-sign2@0.6.0
├─ aws4@1.6.0
├─ babel-runtime@6.23.0
├─ balanced-match@1.0.0
├─ bcrypt-pbkdf@1.0.1
├─ blocking-proxy@0.0.5
├─ bluebird@3.5.0
├─ boom@2.10.1
├─ brace-expansion@1.1.8
├─ caseless@0.12.0
├─ chai@4.1.0
├─ chalk@1.1.3
├─ check-error@1.0.2
├─ cli-table@0.3.1
├─ co@4.6.0
├─ color-convert@1.9.0
├─ color-name@1.1.3
├─ colors@1.1.2
├─ combined-stream@1.0.5
├─ commander@2.11.0
├─ concat-map@0.0.1
├─ core-js@2.4.1
├─ core-util-is@1.0.2
├─ cryptiles@2.0.5
├─ cucumber-expressions@3.0.0
├─ cucumber-tag-expressions@1.0.1
├─ cucumber@2.3.1
├─ d@1.0.0
├─ dashdash@1.14.1
├─ debug@2.6.8
├─ deep-eql@2.0.2
├─ del@2.2.2
├─ delayed-stream@1.0.0
├─ diff@3.3.0
├─ duration@0.2.0
├─ ecc-jsbn@0.1.1
├─ error-stack-parser@2.0.1
├─ es5-ext@0.10.24
├─ es6-iterator@2.0.1
├─ es6-symbol@3.1.1
├─ escape-string-regexp@1.0.5
├─ exit@0.1.2
├─ extend@3.0.1
├─ extsprintf@1.0.2
├─ figures@2.0.0
├─ forever-agent@0.6.1
├─ form-data@2.1.4
├─ fs.realpath@1.0.0
├─ get-func-name@2.0.0
├─ getpass@0.1.7
├─ gherkin@4.1.3
├─ glob@7.1.2
├─ globby@5.0.0
├─ har-schema@1.0.5
├─ har-validator@4.2.1
├─ has-ansi@2.0.0
├─ has-flag@2.0.0
├─ hawk@3.1.3
├─ hoek@2.16.3
├─ http-signature@1.1.1
├─ https-proxy-agent@1.0.0
├─ indent-string@3.1.0
├─ inflight@1.0.6
├─ inherits@2.0.3
├─ ini@1.3.4
├─ is-generator@1.0.3
├─ is-path-cwd@1.0.0
├─ is-path-in-cwd@1.0.0
├─ is-path-inside@1.0.0
├─ is-stream@1.1.0
├─ is-typedarray@1.0.0
├─ isstream@0.1.2
├─ jasmine-core@2.6.4
├─ jasmine@2.6.0
├─ jasminewd2@2.1.0
├─ jsbn@0.1.1
├─ json-schema@0.2.3
├─ json-stable-stringify@1.0.1
├─ json-stringify-safe@5.0.1
├─ jsonify@0.0.0
├─ jsprim@1.4.0
├─ lodash@4.17.4
├─ make-error@1.3.0
├─ mime-db@1.27.0
├─ mime-types@2.1.15
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ mkdirp@0.5.1
├─ ms@2.0.0
├─ mz@2.6.0
├─ oauth-sign@0.8.2
├─ object-assign@4.1.1
├─ once@1.4.0
├─ optimist@0.6.1
├─ options@0.0.6
├─ os-tmpdir@1.0.2
├─ pad-right@0.2.2
├─ path-is-absolute@1.0.1
├─ path-is-inside@1.0.2
├─ path-parse@1.0.5
├─ pathval@1.1.0
├─ performance-now@0.2.0
├─ pify@2.3.0
├─ pinkie-promise@2.0.1
├─ pinkie@2.0.4
├─ progress@2.0.0
├─ protractor-cucumber-framework@3.1.2
├─ protractor@5.1.2
├─ punycode@1.4.1
├─ q@1.5.0
├─ qs@6.4.0
├─ regenerator-runtime@0.10.5
├─ repeat-string@1.6.1
├─ request@2.81.0
├─ resolve@1.3.3
├─ rimraf@2.6.1
├─ safe-buffer@5.1.1
├─ saucelabs@1.3.0
├─ sax@1.2.4
├─ selenium-webdriver@3.0.1
├─ semver@5.3.0
├─ sntp@1.0.9
├─ source-map-support@0.4.15
├─ source-map@0.5.6
├─ sshpk@1.13.1
├─ stack-chain@1.3.7
├─ stack-generator@2.0.1
├─ stackframe@1.0.3
├─ stacktrace-gps@3.0.1
├─ stacktrace-js@2.0.0
├─ string-argv@0.0.2
├─ stringstream@0.0.5
├─ strip-ansi@3.0.1
├─ strip-bom@3.0.0
├─ strip-json-comments@2.0.1
├─ supports-color@2.0.0
├─ thenify-all@1.6.0
├─ thenify@3.3.0
├─ tmp@0.0.30
├─ tough-cookie@2.3.2
├─ ts-node@3.2.1
├─ tsconfig@6.0.0
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ type-detect@4.0.3
├─ typescript@2.4.2
├─ ultron@1.0.2
├─ upper-case-first@1.1.2
├─ upper-case@1.1.3
├─ user-home@1.1.1
├─ util-arity@1.1.0
├─ uuid@3.1.0
├─ v8flags@3.0.0
├─ verror@1.10.0
├─ webdriver-js-extender@1.0.0
├─ webdriver-manager@12.0.6
├─ wordwrap@0.0.3
├─ wrappy@1.0.2
├─ ws@1.1.4
├─ xml2js@0.4.17
├─ xmlbuilder@4.2.1
└─ yn@2.0.0
Done in 14.16s.
```

Run the tests:

```bash
$ yarn e2e -- --baseUrl https://angular.io
yarn e2e v0.27.5
$ webdriver-manager update
webdriver-manager: using local installed version 12.0.6
[17:59:46] I/update - chromedriver: file exists /Users/David/Projects/github/spektrakel-blog/angular-protractor-cucumber/node_modules/webdriver-manager/selenium/chromedriver_2.31.zip
[17:59:46] I/update - chromedriver: unzipping chromedriver_2.31.zip
[17:59:47] I/update - chromedriver: setting permissions to 0755 for /Users/David/Projects/github/spektrakel-blog/angular-protractor-cucumber/node_modules/webdriver-manager/selenium/chromedriver_2.31
[17:59:47] I/update - chromedriver: chromedriver_2.31 up to date
[17:59:47] I/update - selenium standalone: file exists /Users/David/Projects/github/spektrakel-blog/angular-protractor-cucumber/node_modules/webdriver-manager/selenium/selenium-server-standalone-3.4.0.jar
[17:59:47] I/update - selenium standalone: selenium-server-standalone-3.4.0.jar up to date
[17:59:48] I/update - geckodriver: file exists /Users/David/Projects/github/spektrakel-blog/angular-protractor-cucumber/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0.tar.gz
[17:59:48] I/update - geckodriver: unzipping geckodriver-v0.18.0.tar.gz
[17:59:48] I/update - geckodriver: setting permissions to 0755 for /Users/David/Projects/github/spektrakel-blog/angular-protractor-cucumber/node_modules/webdriver-manager/selenium/geckodriver-v0.18.0
[17:59:48] I/update - geckodriver: geckodriver-v0.18.0 up to date
$ protractor "--baseUrl" "https://angular.io"
(node:57809) [DEP0022] DeprecationWarning: os.tmpDir() is deprecated. Use os.tmpdir() instead.
[17:59:49] I/launcher - Running 1 instances of WebDriver
[17:59:49] I/direct - Using ChromeDriver directly...
Feature: Search

    As a developer using Angular
    I need to look-up classes and guidelines
    So that I can concentrate on building awesome applications

  Scenario: Type in a search-term
  ✔ Given I am on the angular.io site
  ✔ When I type "foo" into the search input field
  ✔ Then I should see some results in the search overlay

1 scenario (1 passed)
3 steps (3 passed)
0m07.073s
[18:00:03] I/launcher - 0 instance(s) of WebDriver still running
[18:00:03] I/launcher - chrome #01 passed
Done in 19.48s.
```
