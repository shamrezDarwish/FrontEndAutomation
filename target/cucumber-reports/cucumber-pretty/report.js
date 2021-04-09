$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/Login.feature");
formatter.feature({
  "line": 1,
  "name": "Test an Iframe page",
  "description": "",
  "id": "test-an-iframe-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 12487976100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Iframe handling test",
  "description": "",
  "id": "test-an-iframe-page;iframe-handling-test",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on Website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User click on Iframe option",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on Home button inside the iframe",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User should be able see home page inside the iframe",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsClass.user_is_on_Website()"
});
formatter.result({
  "duration": 3387647700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsClass.user_click_on_option()"
});
formatter.result({
  "duration": 134401300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsClass.user_click_on_Home_button_inside_the_iframe()"
});
formatter.result({
  "duration": 1514550399,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitionsClass.user_should_be_able_see_home_page_inside_the_iframe()"
});
formatter.result({
  "duration": 579152500,
  "status": "passed"
});
formatter.after({
  "duration": 832425601,
  "status": "passed"
});
});