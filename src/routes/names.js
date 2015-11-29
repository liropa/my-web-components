var express = require(`express`),
    router = express.Router();

var names = [
  {
    firstname: `Nick`,
    lastName: `Ryan`
  }
]

// middleware specific to this router
router.use( function timeLogger(req, res, next) {
  console.log(`Time: `, Date.now());
  next();
});

// define the home page route
router.route(`/`)
  .get( function getHomeCb(req, res) {
    res.json({
      names: names
    });
  })
  .post( function postHomeCb(req, res) {
    res.json({
      names: names
    });
  });

module.exports = router;
