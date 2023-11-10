/** 
 * meant  as a means to parse rss feeds from a given URL
 */

const express = require('express')
const Parser = require('rss-parser');
const app = express()
const port = 3001

let parser = new Parser();

/**
 * parse the xml 
 * TODO: get the required url out of the request body.
 */
app.get('/', async (req, res) => {
    let url = req.body?.url || 'https://www.reddit.com/.rss'
    let feed = await parser.parseURL(url);
    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(item.title + ':' + item.link)
    });
  res.send(feed.items)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})