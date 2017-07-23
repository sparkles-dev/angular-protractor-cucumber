Feature: Search
  As a developer using Angular
  I need to look-up classes and guidelines
  So that I can concentrate on building awesome applications

  Scenario: Type in a search-term
    Given I am on the angular.io site
    When I type "foo" into the search input field
    Then I should see some results in the search overlay
