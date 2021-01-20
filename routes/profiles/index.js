'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    // validate = require('express-jsonschema').validate,
    logic = require('./logic')

router.post('/profiles',
    async  (req, res) => {
    let profiles = req.body
        const result = await logic.connectToHow(profiles);
        res.status(200).json({result});
    });


// router.use('/sponsor-products', require('./sponsor-products'))

module.exports = router;
