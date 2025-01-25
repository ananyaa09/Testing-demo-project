class CheckoutPage {
    private createAccount: string;
    private name: string;
    private phone: string;
    private signIn: string;
    private password: string;
    private verify: string;
    private needHelp: string;
    private backToHelp: string;

    constructor() {
        this.createAccount = `//a[@id="createAccountSubmit"]`;
        this.name = `//input[@id="ap_customer_name"]`;
        this.phone = `//input[@id="ap_phone_number"]`;
        this.password = `//input[@type="password"]`;
        this.signIn = `//a[@class="a-link-emphasis"]`;
        this.verify = `//input[@id="continue"]`;
        this.needHelp = `//a[@id="aa_arkose_customer_support_link"]`;
        this.backToHelp = `//a[@id="aa_solve_challenge"]`;
    }
    public async createAccountPage(){
        const createAccount = await $(this.createAccount);
        await createAccount.waitForClickable();
        await createAccount.click();
        await browser.pause(1000);
    }
    
    public async fillDetails(){
        const name = await $(this.name);
        await name.setValue('John');
        const phone = await $(this.phone);
        await phone.setValue('8765456766');
        const password = await $(this.password);
        await password.setValue("DEMO1234");
    }
    
    public async verifyMobile(){
        (await $(this.verify)).waitForClickable();
        (await $(this.verify)).click();
        console.log("Successfully clicked on verify mobile.");
        (await $(this.needHelp)).waitForClickable();
        (await $(this.needHelp)).click();
        console.log("Reached the Need Help Section.");
        (await $(this.backToHelp)).waitForClickable();
        (await $(this.backToHelp)).click();
        await browser.back();
        console.log("Reached back to creating a new account.");
    }

    public async goToAlreadyHaveAccount(){
        const signIn = await $(this.signIn);
        await signIn.waitForClickable();
        await signIn.click();
        await browser.pause(1000);
    }
}


export default CheckoutPage;
