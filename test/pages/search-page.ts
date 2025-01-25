class SearchPage { 
    private selectProduct: string;
    private addToCartBtn: string;
    private addedToCart: string;

    constructor() {
        this.selectProduct = `//div[@role="listitem"]//span[contains(text(),'Apple iPhone 15 Pro Max (512 GB) - White Titanium')]/ancestor::a[1]`;
        this.addToCartBtn = `//div[@id="desktop_qualifiedBuyBox"]//input[@title="Add to Shopping Cart"]`
        this.addedToCart = `//div[@id="attach-added-to-cart-message"]//h4[text()="Added to cart"]`
    }

    public async clickItem() {
        const clickProduct = await $(this.selectProduct);
        await clickProduct.waitForClickable();
        await clickProduct.click();
        await browser.pause(100);
    }

    public async addToCart(){
    const windowHandles = await browser.getWindowHandles();
    await browser.switchToWindow(windowHandles[1]);
    await browser.pause(1000);
    await (await $(this.addToCartBtn)).waitForClickable();
    await $(this.addToCartBtn).click();
    await browser.pause(200);
    await browser.takeScreenshot();
    }

    public async confirmItemAdded(){
        const addedToCart = await $(this.addedToCart);
        await expect(addedToCart).toHaveText("Added to cart")
        await browser.takeScreenshot();
    }
}

export default SearchPage;
