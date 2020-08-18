@Media
Feature: DotCMS Media library

	Scenario: As an Admin, I want check the image details
		Given I have an Admin user already signed in
        When I navigate to the Images page
        Then I open the first image
