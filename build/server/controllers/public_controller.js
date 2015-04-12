(function() {
  var bacon, publicController;

  publicController = {};

  bacon = 'Bacon ipsum dolor amet andouille leberkas filet mignon pork loin kielbasa spare ribs frankfurter ham kevin turducken. Tail sirloin alcatra, strip steak bacon biltong hamburger kevin pastrami cupim ham. Pancetta porchetta tail, biltong ball tip cupim frankfurter shank bacon venison prosciutto corned beef brisket. Cupim chicken sausage corned beef picanha prosciutto doner ribeye filet mignon andouille beef ribs chuck cow. Rump venison brisket, tri-tip sausage shank prosciutto picanha swine pork boudin filet mignon. Tri-tip t-bone corned beef pork beef ribs';

  publicController.index = function(req, res) {
    return res.render('public/index', {
      pageData: bacon
    });
  };

  publicController.about = function(req, res) {
    return res.render('public/about', {
      pageData: bacon
    });
  };

  publicController.products = function(req, res) {
    return res.render('public/products', {
      pageData: bacon
    });
  };

  publicController.gallery = function(req, res) {
    return res.render('public/gallery', {
      pageData: bacon
    });
  };

  publicController.contact = function(req, res) {
    return res.render('public/contact');
  };

  module.exports = publicController;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci9jb250cm9sbGVycy9wdWJsaWNfY29udHJvbGxlci5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLHVCQUFBOztBQUFBLEVBQUEsZ0JBQUEsR0FBbUIsRUFBbkIsQ0FBQTs7QUFBQSxFQUNBLEtBQUEsR0FBUSxrakJBRFIsQ0FBQTs7QUFBQSxFQUlBLGdCQUFnQixDQUFDLEtBQWpCLEdBQXlCLFNBQUMsR0FBRCxFQUFNLEdBQU4sR0FBQTtXQUNyQixHQUFHLENBQUMsTUFBSixDQUFXLGNBQVgsRUFDSTtBQUFBLE1BQUEsUUFBQSxFQUFVLEtBQVY7S0FESixFQURxQjtFQUFBLENBSnpCLENBQUE7O0FBQUEsRUFTQSxnQkFBZ0IsQ0FBQyxLQUFqQixHQUF5QixTQUFDLEdBQUQsRUFBTSxHQUFOLEdBQUE7V0FDckIsR0FBRyxDQUFDLE1BQUosQ0FBVyxjQUFYLEVBQ0k7QUFBQSxNQUFBLFFBQUEsRUFBVSxLQUFWO0tBREosRUFEcUI7RUFBQSxDQVR6QixDQUFBOztBQUFBLEVBY0EsZ0JBQWdCLENBQUMsUUFBakIsR0FBNEIsU0FBQyxHQUFELEVBQU0sR0FBTixHQUFBO1dBQ3hCLEdBQUcsQ0FBQyxNQUFKLENBQVcsaUJBQVgsRUFDSTtBQUFBLE1BQUEsUUFBQSxFQUFVLEtBQVY7S0FESixFQUR3QjtFQUFBLENBZDVCLENBQUE7O0FBQUEsRUFtQkEsZ0JBQWdCLENBQUMsT0FBakIsR0FBMkIsU0FBQyxHQUFELEVBQU0sR0FBTixHQUFBO1dBQ3ZCLEdBQUcsQ0FBQyxNQUFKLENBQVcsZ0JBQVgsRUFDSTtBQUFBLE1BQUEsUUFBQSxFQUFVLEtBQVY7S0FESixFQUR1QjtFQUFBLENBbkIzQixDQUFBOztBQUFBLEVBd0JBLGdCQUFnQixDQUFDLE9BQWpCLEdBQTJCLFNBQUMsR0FBRCxFQUFNLEdBQU4sR0FBQTtXQUN2QixHQUFHLENBQUMsTUFBSixDQUFXLGdCQUFYLEVBRHVCO0VBQUEsQ0F4QjNCLENBQUE7O0FBQUEsRUEyQkEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsZ0JBM0JqQixDQUFBO0FBQUEiLCJmaWxlIjoic2VydmVyL2NvbnRyb2xsZXJzL3B1YmxpY19jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6Ii9zb3VyY2UvIiwic291cmNlc0NvbnRlbnQiOlsicHVibGljQ29udHJvbGxlciA9IHt9XG5iYWNvbiA9ICdCYWNvbiBpcHN1bSBkb2xvciBhbWV0IGFuZG91aWxsZSBsZWJlcmthcyBmaWxldCBtaWdub24gcG9yayBsb2luIGtpZWxiYXNhIHNwYXJlIHJpYnMgZnJhbmtmdXJ0ZXIgaGFtIGtldmluIHR1cmR1Y2tlbi4gVGFpbCBzaXJsb2luIGFsY2F0cmEsIHN0cmlwIHN0ZWFrIGJhY29uIGJpbHRvbmcgaGFtYnVyZ2VyIGtldmluIHBhc3RyYW1pIGN1cGltIGhhbS4gUGFuY2V0dGEgcG9yY2hldHRhIHRhaWwsIGJpbHRvbmcgYmFsbCB0aXAgY3VwaW0gZnJhbmtmdXJ0ZXIgc2hhbmsgYmFjb24gdmVuaXNvbiBwcm9zY2l1dHRvIGNvcm5lZCBiZWVmIGJyaXNrZXQuIEN1cGltIGNoaWNrZW4gc2F1c2FnZSBjb3JuZWQgYmVlZiBwaWNhbmhhIHByb3NjaXV0dG8gZG9uZXIgcmliZXllIGZpbGV0IG1pZ25vbiBhbmRvdWlsbGUgYmVlZiByaWJzIGNodWNrIGNvdy4gUnVtcCB2ZW5pc29uIGJyaXNrZXQsIHRyaS10aXAgc2F1c2FnZSBzaGFuayBwcm9zY2l1dHRvIHBpY2FuaGEgc3dpbmUgcG9yayBib3VkaW4gZmlsZXQgbWlnbm9uLiBUcmktdGlwIHQtYm9uZSBjb3JuZWQgYmVlZiBwb3JrIGJlZWYgcmlicydcblxuIyBob21lIHBhZ2UgJy8nXG5wdWJsaWNDb250cm9sbGVyLmluZGV4ID0gKHJlcSwgcmVzKSAtPlxuICAgIHJlcy5yZW5kZXIgJ3B1YmxpYy9pbmRleCcsXG4gICAgICAgIHBhZ2VEYXRhOiBiYWNvblxuXG4jIGFib3V0IHBhZ2UgJy9hYm91dCdcbnB1YmxpY0NvbnRyb2xsZXIuYWJvdXQgPSAocmVxLCByZXMpIC0+XG4gICAgcmVzLnJlbmRlciAncHVibGljL2Fib3V0JyxcbiAgICAgICAgcGFnZURhdGE6IGJhY29uXG5cbiMgcHJvZHVjdHMgcGFnZSAnL3Byb2R1Y3RzJ1xucHVibGljQ29udHJvbGxlci5wcm9kdWN0cyA9IChyZXEsIHJlcykgLT5cbiAgICByZXMucmVuZGVyICdwdWJsaWMvcHJvZHVjdHMnLFxuICAgICAgICBwYWdlRGF0YTogYmFjb25cblxuIyBnYWxsZXJ5IHBhZ2UgJy9nYWxsZXJ5J1xucHVibGljQ29udHJvbGxlci5nYWxsZXJ5ID0gKHJlcSwgcmVzKSAtPlxuICAgIHJlcy5yZW5kZXIgJ3B1YmxpYy9nYWxsZXJ5JyxcbiAgICAgICAgcGFnZURhdGE6IGJhY29uXG5cbiMgY29udGFjdCBwYWdlICcvY29udGFjdCdcbnB1YmxpY0NvbnRyb2xsZXIuY29udGFjdCA9IChyZXEsIHJlcykgLT5cbiAgICByZXMucmVuZGVyICdwdWJsaWMvY29udGFjdCdcblxubW9kdWxlLmV4cG9ydHMgPSBwdWJsaWNDb250cm9sbGVyXG4iXX0=