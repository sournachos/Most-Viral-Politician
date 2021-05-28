const puppeteer = require('puppeteer');

async function getHouseLinks () {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.texastribune.org/directory/#txhouse');

  const result = await page.evaluate(() => {
        setTimeout(() => {
            const table = document.querySelectorAll("[role='rowgroup']")
            let links = table[0].getElementsByTagName('a')
    
            output = []
    
            for (x of links){
                output.push(x.href)
            }
            return output

        }, 4000)
  })

  return result

}

bois = getHouseLinks()

console.log(bois)