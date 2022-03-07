package stepDefinitions;



import core.Base;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.DemoPageObj;


public class StepDefinitionsClass extends Base {
	
	DemoPageObj page = new DemoPageObj();

	
	@Given("^user is on Base Page$")
	public void user_is_on_Base_Page() throws Throwable {
		initializeDriver();

	}

	@When("^user click on Tile sort & filtering$")
	public void user_click_on_Tile_sort_filtering() throws Throwable {
		page.clickOnTileSortFiltering();
	}

	@When("^user set Animal set using letter '(.+)'$")
	public void user_set_Animal_set_using_letter_a(String inputValue) throws Throwable {
		page.enterAninalInputField(inputValue);
	
	}

	@When("^user set Max life span set to  (.+)$")
	public void user_set_Max_life_span_set_to(String value) throws Throwable {
	
	}

	@When("^user 	Sort order by „Life Span”$")
	public void user_Sort_order_by_Life_Span() throws Throwable {
	page.sortByElementValue();
	}

	@When("^user Select checkbox  to Ascending$")
	public void user_Select_checkbox_to_Ascending() throws Throwable {
	 page.selectAscendingCheckBox();
	}

	@Then("^user Assert that results contains more than '(.+)' items$")
	public void user_Assert_that_results_contains_more_than_items(String input) throws Throwable {

	}
	
	
	
}
