$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/CucumberDemo.feature");
formatter.feature({
  "line": 1,
  "name": "Test Demo",
  "description": "",
  "id": "test-demo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3940046600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on Base Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionsClass.user_is_on_Base_Page()"
});
formatter.result({
  "duration": 9911884000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Exercise one",
  "description": "",
  "id": "test-demo;exercise-one",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user click on Tile sort \u0026 filtering",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user set Animal set using letter \u0027a\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user set Max life span set to  40",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user \tSort order by „Life Span”",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select checkbox  to Ascending",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Assert that results contains more than \u002712\u0027 items",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionsClass.user_click_on_Tile_sort_filtering()"
});
formatter.result({
  "duration": 448604600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "a",
      "offset": 34
    }
  ],
  "location": "StepDefinitionsClass.user_set_Animal_set_using_letter_a(String)"
});
formatter.result({
  "duration": 10206743700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@id\u003d\u0027isc_EU\u0027]\"}\n  (Session info: chrome\u003d99.0.4844.51)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-RT6M74U\u0027, ip: \u0027192.168.1.100\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 99.0.4844.51, chrome: {chromedriverVersion: 99.0.4844.51 (d537ec02474b5..., userDataDir: C:\\Users\\darwi\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60322}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e3c29b2eb42f7eb6824ef74f0e8c7bb5\n*** Element info: {Using\u003dxpath, value\u003d//input[@id\u003d\u0027isc_EU\u0027]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:472)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\r\n\tat pageObjects.DemoPageObj.enterAninalInputField(DemoPageObj.java:43)\r\n\tat stepDefinitions.StepDefinitionsClass.user_set_Animal_set_using_letter_a(StepDefinitionsClass.java:30)\r\n\tat ✽.When user set Animal set using letter \u0027a\u0027(Features/CucumberDemo.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "40",
      "offset": 31
    }
  ],
  "location": "StepDefinitionsClass.user_set_Max_life_span_set_to(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionsClass.user_Sort_order_by_Life_Span()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "StepDefinitionsClass.user_Select_checkbox_to_Ascending()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 45
    }
  ],
  "location": "StepDefinitionsClass.user_Assert_that_results_contains_more_than_items(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 889149100,
  "status": "passed"
});
});