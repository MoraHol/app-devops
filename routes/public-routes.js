const router = require('express').Router();
const got = require('got');

router.get('/markets', ((req, res) => {
    got('https://international.bittrex.com/api/v2.0/pub/Markets/GetMarketSummaries').then(response => {
        res.json(JSON.parse(response.body))
    }).catch(error => {
        console.log(error);
    });
}));

router.get('/tokens', ((req, res) => {
    let url = '';
    if (req.query.flag === 'true') {
        url = `https://international.bittrex.com/Api/v2.0/pub/market/GetLatestTick?marketName=${req.query.market}&tickInterval=${req.query.frecuency}`;
    } else {
        url = `https://international.bittrex.com/Api/v2.0/pub/market/GetTicks?marketName=${req.query.market}&tickInterval=${req.query.frecuency}`;
    }
    got(url).then(response => {
        res.json(JSON.parse(response.body))
        console.log(JSON.parse(response.body))
    }).catch(error => {
        console.log(error);
    });
}));


module.exports = router