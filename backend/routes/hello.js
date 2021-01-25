const express = require('express');
const router = express.Router();
const connectDB = require('../db.js');

// @route   GET api/routes
// @desc    This is a basic root route
// @access  Public
/*
 * Function Queries the results from the content_db.user table and send
 * Stringifies the results before sending them.
 */
router.get('/search', async (req, res) => {
  try {
    connectDB.query("SELECT * FROM content_db.users", function (err, result) {
      res.send(JSON.stringify(result));
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
