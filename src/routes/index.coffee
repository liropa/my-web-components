express = require 'express'
router = express.Router()
marko = require 'marko'

# GET home page.

indexTemplate = marko.load require.resolve '../views/index.marko'
router.get '/', (req, res) ->
  indexTemplate.render
    $global: locals: req.app.locals
    title: 'Express'
  , res

module.exports = router
