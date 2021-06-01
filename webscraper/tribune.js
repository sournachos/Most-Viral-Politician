const axios = require("axios").default;
const cheerio = require("cheerio")


const scrape = async () => {
    const { data } = await axios.get('https://www.texastribune.org/directory/#txhouse');
    const $ = cheerio.load(data)

    const result = $('#concierge').find('a')

    console.log(result)
}

scrape()