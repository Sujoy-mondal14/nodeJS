const {nanoid} = require('nanoid')
const URL = require('../model/url')

const handelNewShortUrl = async (req,res) => {
    const body = req.body
    if(!body.url) return res.status(400).json({err: 'url is required'})

    const UrlId = nanoid(8);
    await URL.create({
        shortId: UrlId,
        redirectedUrl: body.url,
        visitHistory: []
    })    

    return res.render('home',{id: UrlId})
}

async function handelAnalytics (req,res){
    const shortId = req.params.shortId;
    const result= await URL.findOne({shortId});
    return res.json({
        totalclicks: result.visitHistory.length,
        analytics: result.visitHistory
    })
}

module.exports = {
    handelNewShortUrl, handelAnalytics
}