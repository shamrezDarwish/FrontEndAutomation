package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilities.WebDriverUtility;

public class DemoPageObj extends Base {

	public DemoPageObj() {
		// we will use initElements method of PageFactory class to initialize the
		// Webelements of UI
		PageFactory.initElements(driver, this);
	}

	// PageFactory class provides @FindBy annotation to find UI elements.
	// driver.findElement(by.xpath("//tag[@attribute='value']"))
	// the above code is same as below but, below code is used to implement
	// PageFactory in POM Design pattern
	// @FindBy(how = How.xpath, using = "//tag[@attribute= 'value'])
	// we will store these elements as a private WebElement

	@FindBy(how = How.XPATH, using = "//li[@id='iFrame']")
	private WebElement iframeField;

	@FindBy(how = How.XPATH, using = "//iframe[@name='globalSqa']")
	private WebElement iframeWebElement;
	
	@FindBy(how = How.XPATH, using = "//div[@id='mobile_menu_toggler']")
	private WebElement homeMenu;
	
	@FindBy(how = How.XPATH, using = "(//a[text()='Home'])[2]")
	private WebElement home;
	
	


	// We start writting public methods to access each element with respected
	// actions to them.
	
	public void clickOnElement() {
		WebDriverUtility.clickOnElement(iframeField);
	}
	
	public void switchToIframe() {
		WebDriverUtility.switchToFrameByWebElement(iframeWebElement);
	}
	
	public void clickOnHomeMenu() {
		WebDriverUtility.waitUntilElementPresent(homeMenu);
		WebDriverUtility.clickOnElement(homeMenu);
	}
	
	public boolean validateHomeMenuIspresent() {
		
		return home.isDisplayed();
	}

	

	public String getPageTitle() {
		String pageTitle = driver.getTitle();
		return pageTitle;
	}

}
