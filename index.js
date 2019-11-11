const puppeteer = require('puppeteer');
const delay = require('delay');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  while (true) {
    try {
      await page.goto(
        'https://www.xn--100-mmlpaa9fbc4ccb3l4bd5pe7frde.com/register',
      );
      await delay(1000);
      const bodyHandle = await page.$('body');
      const html = await page.evaluate(body => body.innerHTML, bodyHandle);
      if (
        html.includes('ขณะนี้คุณอยู่ระหว่างการรอคิวเพื่อลงทะเบียน') ||
        html.includes('504 Gateway Time-out')
      ) {
        continue;
      } else {
        setInterval(() => {
          console.log('Found!!');
        }, 1000);
        break;
      }
    } catch (e) {
      continue;
    }
  }
})();
