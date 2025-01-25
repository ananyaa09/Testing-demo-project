import HomePage from '../../pages/home-page';
import SearchPage from '../../pages/search-page';
import CartPage from '../../pages/cart-page';
import { Given , When , Then } from '@wdio/cucumber-framework';
import CheckoutPage from '../../pages/checkout-page';

const homePage = new HomePage();
const searchPage = new SearchPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();


Given(/^Amazon homepage is opened$/ , async ()=>{

    await homePage.openHomepage();

});

When(/^I search for (.*)$/ , async (searchItem)=>{
    await homePage.searchForItem(searchItem);
});

Then(/^I select (.*) from the dropdown menu$/ , async (selectItem)=>{
    console.log(`Select item: ${selectItem}`)
    await homePage.selectItem(selectItem);
});

Then(/^I click on the item$/ , async ()=>{
    await searchPage.clickItem();
});

Then(/^I add the item to cart$/, async ()=>{
    await searchPage.addToCart();
});

Then(/^I confirm that the item is added to the cart$/, async ()=>{
    await searchPage.confirmItemAdded();
});

When(/^I go to Cart Page$/, async()=>{
    await cartPage.goToCartPage();
});

Then(/^I confirm if my order is eligible for free delivery$/, async()=>{
    await cartPage.checkFreeDeliveryEligibility();
});

Then(/^I select the gift option$/, async()=>{
    await cartPage.selectGift();
});

Then(/^I check the description of EMI$/, async()=>{
    await cartPage.checkEMIDescription();
});

Then(/^I go to payment Page$/, async()=>{
    await cartPage.goToCheckoutPage();
});

Then(/^I click on creating a new Account$/, async()=>{
    await checkoutPage.createAccountPage();
});

Then(/^I fill in the details asked$/, async()=>{
    await checkoutPage.fillDetails();
});

Then(/^I try to verify mobile$/, async()=>{
    await checkoutPage.verifyMobile();
});


When(/^I go to Already have an account$/, async()=>{
    await checkoutPage.goToAlreadyHaveAccount();
});