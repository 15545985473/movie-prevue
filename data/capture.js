const puppeteer = require("puppeteer");
const url = 'https://movie.douban.com/tag/#/?sort=S&range=7,10&tags='

function sleep(time) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,time)
    })
}

(async () => {
    const brower = await puppeteer.launch({
        args: ['--no-sandbox'],
        dumpio: false
    });
    const page = await brower.newPage();
    await page.goto(url, {
        waitUntil: 'networkidle2'
    });

    // sleep(3000)
    // await page.waitForSelector('.more')
    
    // for(let i=0; 5>i; i++) {
    //      await sleep(3000)
    //      await page.click('.more')
    // }
    
    let list = await page.evaluate(() => {
        let $ = window.$;
     
        let items = $(".list-wp a");
        let list = [];
        if(items.length > 0) {
            items.each((index, item) => {
                var doubanId = $(item).find("div").data("id")
                var title = $(item).find(".title").text()
                var rate = $(item).find(".rate").text()
                var poster = $(item).find("img").attr("src").replace("s_","l_")
                list.push({
                    poster,
                    title,
                    rate,
                    doubanId,
                })
            })
        }
        
        return list

    })

    await brower.close()
    console.log(process)
    process.send(list);
    process.exit(0)
})()

