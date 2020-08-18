@Access-Security
Feature: DotCMS Access and Security

	Scenario Outline: As an Admin, I can log into the administration area
		Given I am on the Login page
		When I login with <username> and <password>
		Then I should see the dashboard page
		Examples:
			| username         | password |
			| admin@dotcms.com | admin    |

	Scenario Outline: As a Regular user, I cannot log into the administration area
		Given I am on the Login page
		When I login with <username> and <password>
		Then I should see a flash message saying <message>
		Examples:
			| username | password | message                                  |
			| foobar   | barfoo   | Authentication failed. Please try again. |