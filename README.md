# Testing-demo-project - Amazon.com

**home-page.ts:**
    Handles the automation of the homepage functionality.
    
**Key Features:**

    1. Opens the Amazon homepage and maximizes the browser window.
    
    2. Simulates typing into the search input field.
    
    3. Selects the suggested item from the search results.
    
**search-page.ts**
    Manages the product search results and their interaction.
    
**Key Features:**

    1. Clicks on a specific product from the search results based on its title.
    
    2. Handles switching between multiple browser tabs/windows to interact with the product details page.
    
    3. Adds a product to the cart and validates the "Added to cart" confirmation message.

**cart-page.ts**
    Focuses on cart functionalities and pre-checkout processes.
    
**Key Features:**

    1. Navigates to the cart page and verifies delivery eligibility.

    2. Handles gift options by selecting checkbox and validating selections.
    
    3. Retrieves EMI description details for products.
    
    4. Proceeds to the checkout page.
    
**checkout-page.ts**
Validates the creation of a new account on the sign-in page, fills in demo details and gets back to the sign-in page.

**Key Features:**

    1. Navigates to the account creation page by clicking the "Create Account" link.
   
    2. Fills in details like name, phone number, and password for account creation.
   
    3. Clicks on the "Verify" button to verify the mobile number.
 
    4. Navigates to the "Need Help" section and interacts with it.
   
    5. Returns to the account creation page after clicking the "Back to Help" link.
