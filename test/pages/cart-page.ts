class CartPage {
    private cartBtn: string;
    private checkEligibility: string;
    private giftCheckbox: string;
    private giftCheckboxCheck: string;
    private EMIDescription: string;
    private proceedToPay: string;

    constructor() {
        this.cartBtn = `//input[@aria-labelledby="attach-sidesheet-view-cart-button-announce"]`;
        this.checkEligibility = `//b[contains(text(),"FREE Delivery")]`;
        this.giftCheckbox = `//label[@for="sc-buy-box-gift-checkbox"]/i`;
        this.giftCheckboxCheck = '//input[@id="sc-buy-box-gift-checkbox"]';
        this.EMIDescription = `//div[@class="a-row a-expander-container a-expander-inline-container"]`;
        this.proceedToPay = `//input[@name="proceedToRetailCheckout"]`;
    }

    public async goToCartPage() {
        const cartBtn = await $(this.cartBtn);
        await cartBtn.waitForClickable();
        await cartBtn.click();
    }

    public async checkFreeDeliveryEligibility(){
        const text = await $(this.checkEligibility);
        await expect(text).toBeExisting();
        console.log(text.getText());
    }

    public async selectGift(){
        let selectGift = await $(this.giftCheckbox);
        await selectGift.click();
        await expect(await $(this.giftCheckboxCheck).isSelected()).toBe(true);
    }

    public async checkEMIDescription(){
        await $(this.EMIDescription).click();
        console.log(await $(this.EMIDescription).getText());
    }

    public async goToCheckoutPage() {
        const proceedToPay = await $(this.proceedToPay);
        await proceedToPay.waitForClickable();
        await proceedToPay.click();
        await browser.pause(500);
    }
}
export default CartPage;