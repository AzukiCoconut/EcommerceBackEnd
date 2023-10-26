const router = require('express').Router();
const apiRoutes = require('./api');

// Send api routes
router.use('/api', apiRoutes);

// Send wrong route message if not api
router.use((req, res) => {
    res.send('<h1>Wrong Route!</h1>')
});

module.exports = router;