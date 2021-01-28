'use strict';

const router = require('express-promise-router')({
        mergeParams: true
    }),
    // validate = require('express-jsonschema').validate,
    logic = require('./logic')

router.post('/settings',
    async  (req, res) => {
    let settings = req.body
        const result = await logic.setOperationSettings(settings);
        res.status(200).json({result});
    });


module.exports = router;
