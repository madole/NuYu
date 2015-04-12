express = require 'express'

ASSET_BUILD_PATH = 'client'
PORT = process.env.PORT ? 3000

# controllers
publicController = require './server/controllers/public_controller'

app = express()
app.configure ->
# jade templates from templates dir
    app.use express.compress()
    app.set 'views', "#{__dirname}/server/templates"
    app.set 'view engine', 'jade'

    # serve static assets
    app.use('/assets', express.static("#{__dirname}/#{ASSET_BUILD_PATH}"))

    # logging
    app.use express.logger()
    app.set 'port', PORT

# public routes
app.get '/', publicController.index
app.get '/about', publicController.about
app.get '/products', publicController.products
app.get '/gallery', publicController.gallery
app.get '/contact', publicController.contact


module.exports = app


