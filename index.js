const puppeteer = require('puppeteer')
const delay = require('delay')

;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    executablePath:
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  })
  const page = await browser.newPage()
  while (true) {
    try {
      await page.goto('http://measy-announcement.mea.or.th/')
      await delay(1000)
      const bodyHandle = await page.$('body')
      const img = await page.$('img')
      await page.waitForSelector('img.fit')
      const getImgSrc = await page.$eval('img', img => img.getAttribute('src'))
      if (getImgSrc === 'sorry.png') {
        continue
      } else {
        setInterval(() => {
          console.log('Found!!')
        }, 1000)
        break
      }
    } catch (e) {
      continue
    }
  }
})()
