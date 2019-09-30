const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  });
  const page = await browser.newPage();
  while (true) {
    await page.goto('https://regist.ชิมช้อปใช้.com/Register/');
    const bodyHandle = await page.$('body');
    const html = await page.evaluate(body => body.innerHTML, bodyHandle);
    if (
      html.includes('ขณะนี้คุณอยู่ระหว่างการรอคิวเพื่อลงทะเบียน') ||
      html.includes('ขณะนี้มีผู้ลงทะเบียนครบ 1 ล้านคนแล้ว')
    ) {
      continue;
    } else {
      setInterval(() => {
        console.log('Found!!');
      }, 1000);
      break;
    }
  }
})();
