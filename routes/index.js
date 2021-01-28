const router = require('express-promise-router')({
    mergeParams: true
});


router.use('/profiles', require('./profiles'))

router.use('/settings', require('./settings'))

module.exports = router;
