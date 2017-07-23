APC: Angular, Protractor, Cucumber
==================================

> Feature-driven end-to-end testing.


```bash
$ yarn e2e -- --baseUrl https://angular.io
```



#### Transcript

```bash
$ yarn init
yarn init v0.27.5
question name (angular-protractor-cucumber):
question version (1.0.0):
question description: Feature-driven end-to-end-testing
question entry point (index.js):
question repository url: https://github.com/spektrakel-blog/angular-protractor-cucumber
question author: David Herges <david@spektrakel.de>
question license (MIT):
success Saved package.json
Done in 35.80s.
```

```bash
$ yarn add --dev protractor
yarn add v0.27.5
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 116 new dependencies.
├─ @types/node@6.0.85
├─ @types/q@0.0.32
├─ @types/selenium-webdriver@2.53.42
├─ adm-zip@0.4.7
├─ agent-base@2.1.1
├─ ajv@4.11.8
├─ ansi-regex@2.1.1
├─ ansi-styles@2.2.1
├─ array-union@1.0.2
├─ array-uniq@1.0.3
├─ arrify@1.0.1
├─ asn1@0.2.3
├─ assert-plus@1.0.0
├─ asynckit@0.4.0
├─ aws-sign2@0.6.0
├─ aws4@1.6.0
├─ balanced-match@1.0.0
├─ bcrypt-pbkdf@1.0.1
├─ blocking-proxy@0.0.5
├─ boom@2.10.1
├─ brace-expansion@1.1.8
├─ caseless@0.12.0
├─ chalk@1.1.3
├─ co@4.6.0
├─ combined-stream@1.0.5
├─ concat-map@0.0.1
├─ cryptiles@2.0.5
├─ dashdash@1.14.1
├─ debug@2.6.8
├─ del@2.2.2
├─ delayed-stream@1.0.0
├─ ecc-jsbn@0.1.1
├─ escape-string-regexp@1.0.5
├─ exit@0.1.2
├─ extend@3.0.1
├─ extsprintf@1.0.2
├─ forever-agent@0.6.1
├─ form-data@2.1.4
├─ fs.realpath@1.0.0
├─ getpass@0.1.7
├─ glob@7.1.2
├─ globby@5.0.0
├─ har-schema@1.0.5
├─ har-validator@4.2.1
├─ has-ansi@2.0.0
├─ hawk@3.1.3
├─ hoek@2.16.3
├─ http-signature@1.1.1
├─ https-proxy-agent@1.0.0
├─ inflight@1.0.6
├─ inherits@2.0.3
├─ ini@1.3.4
├─ is-path-cwd@1.0.0
├─ is-path-in-cwd@1.0.0
├─ is-path-inside@1.0.0
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
├─ mime-db@1.27.0
├─ mime-types@2.1.15
├─ minimatch@3.0.4
├─ minimist@1.2.0
├─ ms@2.0.0
├─ oauth-sign@0.8.2
├─ object-assign@4.1.1
├─ once@1.4.0
├─ optimist@0.6.1
├─ options@0.0.6
├─ os-tmpdir@1.0.2
├─ path-is-absolute@1.0.1
├─ path-is-inside@1.0.2
├─ performance-now@0.2.0
├─ pify@2.3.0
├─ pinkie-promise@2.0.1
├─ pinkie@2.0.4
├─ protractor@5.1.2
├─ punycode@1.4.1
├─ q@1.4.1
├─ qs@6.4.0
├─ request@2.81.0
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
├─ stringstream@0.0.5
├─ strip-ansi@3.0.1
├─ supports-color@2.0.0
├─ tmp@0.0.30
├─ tough-cookie@2.3.2
├─ tunnel-agent@0.6.0
├─ tweetnacl@0.14.5
├─ ultron@1.0.2
├─ uuid@3.1.0
├─ verror@1.3.6
├─ webdriver-js-extender@1.0.0
├─ webdriver-manager@12.0.6
├─ wordwrap@0.0.3
├─ wrappy@1.0.2
├─ ws@1.1.4
├─ xml2js@0.4.17
└─ xmlbuilder@4.2.1
Done in 7.62s.
```

```bash
$ yarn add --dev cucumber protractor-cucumber-framework
yarn add v0.27.5
[1/4] Resolving packages...
[2/4] Fetching packages...
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 44 new dependencies.
├─ any-promise@1.3.0
├─ assertion-error-formatter@2.0.0
├─ babel-runtime@6.23.0
├─ bluebird@3.5.0
├─ cli-table@0.3.1
├─ colors@1.1.2
├─ commander@2.11.0
├─ core-js@2.4.1
├─ core-util-is@1.0.2
├─ cucumber-expressions@3.0.0
├─ cucumber-tag-expressions@1.0.1
├─ cucumber@2.3.1
├─ d@1.0.0
├─ diff@3.3.0
├─ duration@0.2.0
├─ error-stack-parser@2.0.1
├─ es5-ext@0.10.24
├─ es6-iterator@2.0.1
├─ es6-symbol@3.1.1
├─ figures@2.0.0
├─ gherkin@4.1.3
├─ indent-string@3.1.0
├─ is-generator@1.0.3
├─ is-stream@1.1.0
├─ mz@2.6.0
├─ pad-right@0.2.2
├─ path-parse@1.0.5
├─ progress@2.0.0
├─ protractor-cucumber-framework@3.1.2
├─ regenerator-runtime@0.10.5
├─ repeat-string@1.6.1
├─ resolve@1.3.3
├─ stack-chain@1.3.7
├─ stack-generator@2.0.1
├─ stackframe@1.0.3
├─ stacktrace-gps@3.0.1
├─ stacktrace-js@2.0.0
├─ string-argv@0.0.2
├─ thenify-all@1.6.0
├─ thenify@3.3.0
├─ upper-case-first@1.1.2
├─ upper-case@1.1.3
├─ util-arity@1.1.0
└─ verror@1.10.0
Done in 11.79s.
```



