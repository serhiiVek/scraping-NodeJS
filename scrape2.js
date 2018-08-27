const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const writeStream = fs.createWriteStream('post.csv');

writeStream.write(`Title \n`);

request('https://tproger.ru/digest/films/', (error, response, html)=>{
    if(!error && response.statusCode == 200) {
        const $ = cheerio.load(html);
        $('.nav-collapse.collapse').each((i, el) =>{
            const title = $(el).find('a').text();
            //const text = $(el).find('p').attr();

            console.log(title + '\n');
            writeStream.write(`${title} \n`);
            console.log('Scraping Done...');

        });
    }
});