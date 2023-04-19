const assert = require('assert');

describe('ClassAttributeTest', function () {

    it('test_ClassAttribute', async function () {
        const findButton = await driver.findElement(By.xpath("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]"));
        await findButton.click();

        const alert = await driver.switchTo().alert();
        const alertText = await alert.getText();
        if (alertText === 'Primary button pressed') {
            await alert.accept();
        }

        assert.strictEqual(alertText, 'Primary button pressed', 'Alert text did not match.');
        console.log(`Button has btn-primary class and alert text is ${alertText}.`);
        console.log('Test Passed...');
    });
});