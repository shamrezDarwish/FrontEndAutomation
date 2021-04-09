package stepDefinitions;

import org.junit.Assert;

import core.Base;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.DemoPageObj;
import utilities.WebDriverUtility;

public class StepDefinitionsClass extends Base {

	DemoPageObj demoPageObj = new DemoPageObj();
	
	@Given("^User is on Website$")
	public void user_is_on_Website() throws Throwable {
		// we need to get to  website.
		Base.initializeDriver();
		logger.info("Retail page is opened");
		String actualPageTitle = demoPageObj.getPageTitle();
		String expectedPageTitle = "Frames and Window Dummy Testing Site - GlobalSQA";
		Assert.assertEquals(expectedPageTitle, actualPageTitle);
		logger.info("Page title  is verified");
		WebDriverUtility.screenShot();

	}

	@When("^User click on Iframe option$")
	public void user_click_on_option() throws Throwable {
		demoPageObj.clickOnElement();
		logger.info("User click on Iframe options");

	}

	@And("^User click on Home button inside the iframe$")
	public void user_click_on_Home_button_inside_the_iframe() throws Throwable {
		demoPageObj.switchToIframe();
		logger.info("switched to iframe");
		//WebDriverUtility.wait(5000);
		demoPageObj.clickOnHomeMenu();
		logger.info("User click on HomeMenu");
	}

	@Then("^User should be able see home page inside the iframe$")
	public void user_should_be_able_see_home_page_inside_the_iframe() throws Throwable {
		Assert.assertTrue("Home Menu is present", demoPageObj.validateHomeMenuIspresent());
		WebDriverUtility.screenShot();
		WebDriverUtility.switchToMainPage();
		

	}
}
