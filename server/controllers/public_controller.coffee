publicController = {}

# home page '/'
publicController.index = (req, res) ->
  res.render 'public/index'
    
publicController.about = (req, res) ->
  bacon = 'Bacon ipsum dolor amet andouille leberkas filet mignon pork loin kielbasa spare ribs frankfurter ham kevin turducken. Tail sirloin alcatra, strip steak bacon biltong hamburger kevin pastrami cupim ham. Pancetta porchetta tail, biltong ball tip cupim frankfurter shank bacon venison prosciutto corned beef brisket. Cupim chicken sausage corned beef picanha prosciutto doner ribeye filet mignon andouille beef ribs chuck cow. Rump venison brisket, tri-tip sausage shank prosciutto picanha swine pork boudin filet mignon. Tri-tip t-bone corned beef pork beef ribs'
  res.render 'public/about',
    pageData: bacon

publicController.products = (req, res) ->
  res.render 'public/products'

publicController.contact = (req, res) ->
  res.render 'public/contact'

module.exports = publicController
