publicController = {}

# home page '/'
publicController.index = (req, res) ->
  res.render 'public/index'
    
publicController.about = (req, res) ->    
  res.render 'public/about'

publicController.products = (req, res) ->
  res.render 'public/products'

module.exports = publicController
