const router = require('express').Router();
const https = require('https');
router.get('/', (req, res) => {
    res.json({
        error: null,
        data: {
            title: 'mi ruta protegida',
            user: req.user
        }
    })
})


module.exports = router