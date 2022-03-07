package pageObjects;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import core.Base;
import utilities.WebDriverUtility;

public class DemoPageObj extends Base {

	public DemoPageObj() {

		PageFactory.initElements(driver, this);
	}

	
	@FindBy(xpath ="//td[text()='Tile Sort & Filtering']")
	WebElement tileSortFiltering;
	
	@FindBy(xpath="//input[@id='isc_EU']")
	WebElement animalInputField;
	
	@FindBy(xpath="//div[@id='isc_EM']")
	WebElement slider;
	
	@FindBy(xpath="//div[text()='Life Span']")
	WebElement sortByElement;
	
	@FindBy(xpath="//div[@id='isc_FR']")
	WebElement ascendingCheckBox;
	
	
	
	public void clickOnTileSortFiltering() {
	
		tileSortFiltering.click();
	}
	
	public void enterAninalInputField(String value) {
		driver.switchTo().frame("__gwt_historyFrame");
		animalInputField.sendKeys(value);
	}
	
	public void sortByElementValue() {
		sortByElement.click();
	}
	
	public void selectAscendingCheckBox() {
		ascendingCheckBox.click();
	}
}
