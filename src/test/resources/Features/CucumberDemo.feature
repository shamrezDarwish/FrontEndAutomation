Feature: Test an Iframe page 

#any steps which are repeated at the beginning of all scenarios in one feature can be placed
#under Background keyword and it will reduce code duplicate and writing same steps over and over

#Background:
#Given User is on Website 



@test 
Scenario: Iframe handling test 
	Given User is on Website 
	When User click on Iframe option 
	And User click on Home button inside the iframe 
	Then User should be able see home page inside the iframe 
	
	
	
	#if i want to run same scenario with multiple userName and Password 
	# Should i copy and past same scenario with multiple user and pass ?
	#This scenario is just for demo purpose and there is no Step definitions created for it.  
	

Scenario Outline: Login to Application with multiple users 
	Given User is on Website 
	When User click on Login 
	And User enter username '<userName>' and password '<password>' 
	And User click on Login button 
	Then User should be logged in to MyAccount dashboard 
	
	Examples: 
		|userName|password|
		|xyz@gmail.com|sdet|
		|abc@gmail.com|JBond|
		|abcd@gmail.com|TEST|
