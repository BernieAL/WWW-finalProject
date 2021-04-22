



const Lens = require('./models/lens-model')
const {By,Builder,Key,util,withTagName,cssSelector,Select, WebDriver,until, promise,Promise,Map,map} = require('selenium-webdriver');
require('chromedriver')
const { elementIsDisabled } = require('selenium-webdriver/lib/until');
const fs = require('fs')
const chalk = require('chalk')
let comments = []


const lens = {
    Name: '35mm F1.4 AI-S',
    Brand:'Nikkor'
}

//scraper function
async function Buy(lens){

    let lensName = lens.Name
    let lensBrand = lens.Brand

    lensQuery = `${lens.Brand} ${lens.Name}`
    console.log(lensQuery)

    let driver = await new Builder().forBrowser('chrome').build();
    
    await driver.get('https://ebay.com');
    await driver.sleep(2000)
    
    //search bar
    const search = await driver.wait(until.elementLocated(By.css('#gh-ac')),1000);
    await driver.sleep(1500)
    search.sendKeys(lensQuery)

    //hit enter on search bar
    await driver.sleep(1000)
    search.sendKeys(Key.RETURN)    
    


}

//Buy(lens)


module.exports= {
    Buy: Buy
}
