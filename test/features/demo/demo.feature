Feature: Demo feature
    Scenario Outline: Run first demo feature file
        Given Amazon homepage is opened
        When I search for <SearchItem>
        Then I select <SelectItem> from the dropdown menu
        Then I click on the item
        And I add the item to cart
        Then I confirm that the item is added to the cart
        When I go to Cart Page
        Then I confirm if my order is eligible for free delivery
        And I select the gift option
        And I check the description of EMI

        Then I go to payment Page
        When I click on creating a new Account
        Then I fill in the details asked
        And I try to verify mobile
        When I go to Already have an account
        
        Examples:
            | SearchItem        | SelectItem        | 
            | Iphone 15 pro max | Iphone 15 pro max | 