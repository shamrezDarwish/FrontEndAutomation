Feature: Test Demo 

Background: 
	Given user is on Base Page 
	
	
	@test
Scenario: Exercise one 
	When user click on Tile sort & filtering 
	When user set Animal set using letter 'a' 
	And user set Max life span set to  40 
	And user 	Sort order by „Life Span” 
	And user Select checkbox  to Ascending 
	Then user Assert that results contains more than '12' items 
