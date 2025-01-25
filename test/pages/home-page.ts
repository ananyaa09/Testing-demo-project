class HomePage {
    private searchInput: string;
    private option: string;

    constructor() {
        this.searchInput = `[id="twotabsearchtextbox"]`;
        this.option = `//div[@aria-label="iphone 15 pro max"]`;
    }

    public async openHomepage() {
        await browser.url('https://www.amazon.in/');
        await browser.maximizeWindow();
        browser.pause(100000);
    }

    public async searchForItem(searchItem: string) {
        const searchInputElement = await $(this.searchInput);
        await searchInputElement.click();
        for(const char of searchItem){
            await browser.keys(char);
            await browser.pause(100);
            if(await (await $(this.option)).isDisplayed()){
                break;
            }
        }
    }

    public async selectItem(selectItem: string) {
        const option = await $(this.option)
        console.log("Searching for: " +selectItem);
        await option.waitForClickable();
        await option.click();
        await browser.pause(100);
    }
}

export default HomePage;
