(function() {
  var ASSET_BUILD_PATH, PORT, app, express, publicController, ref;

  express = require('express');

  ASSET_BUILD_PATH = 'client';

  PORT = (ref = process.env.PORT) != null ? ref : 3000;

  publicController = require('./server/controllers/public_controller');

  app = express();

  app.configure(function() {
    app.use(express.compress());
    app.set('views', __dirname + "/server/templates");
    app.set('view engine', 'jade');
    app.use('/assets', express["static"](__dirname + "/" + ASSET_BUILD_PATH));
    app.use(express.logger());
    return app.set('port', PORT);
  });

  app.get('/', publicController.index);

  app.get('/about', publicController.about);

  app.get('/products', publicController.products);

  app.get('/gallery', publicController.gallery);

  app.get('/contact', publicController.contact);

  module.exports = app;

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFBLDJEQUFBOztBQUFBLEVBQUEsT0FBQSxHQUFVLE9BQUEsQ0FBUSxTQUFSLENBQVYsQ0FBQTs7QUFBQSxFQUVBLGdCQUFBLEdBQW1CLFFBRm5CLENBQUE7O0FBQUEsRUFHQSxJQUFBLDRDQUEwQixJQUgxQixDQUFBOztBQUFBLEVBTUEsZ0JBQUEsR0FBbUIsT0FBQSxDQUFRLHdDQUFSLENBTm5CLENBQUE7O0FBQUEsRUFRQSxHQUFBLEdBQU0sT0FBQSxDQUFBLENBUk4sQ0FBQTs7QUFBQSxFQVNBLEdBQUcsQ0FBQyxTQUFKLENBQWMsU0FBQSxHQUFBO0FBRVYsSUFBQSxHQUFHLENBQUMsR0FBSixDQUFRLE9BQU8sQ0FBQyxRQUFSLENBQUEsQ0FBUixDQUFBLENBQUE7QUFBQSxJQUNBLEdBQUcsQ0FBQyxHQUFKLENBQVEsT0FBUixFQUFvQixTQUFELEdBQVcsbUJBQTlCLENBREEsQ0FBQTtBQUFBLElBRUEsR0FBRyxDQUFDLEdBQUosQ0FBUSxhQUFSLEVBQXVCLE1BQXZCLENBRkEsQ0FBQTtBQUFBLElBS0EsR0FBRyxDQUFDLEdBQUosQ0FBUSxTQUFSLEVBQW1CLE9BQU8sQ0FBQyxRQUFELENBQVAsQ0FBa0IsU0FBRCxHQUFXLEdBQVgsR0FBYyxnQkFBL0IsQ0FBbkIsQ0FMQSxDQUFBO0FBQUEsSUFRQSxHQUFHLENBQUMsR0FBSixDQUFRLE9BQU8sQ0FBQyxNQUFSLENBQUEsQ0FBUixDQVJBLENBQUE7V0FTQSxHQUFHLENBQUMsR0FBSixDQUFRLE1BQVIsRUFBZ0IsSUFBaEIsRUFYVTtFQUFBLENBQWQsQ0FUQSxDQUFBOztBQUFBLEVBdUJBLEdBQUcsQ0FBQyxHQUFKLENBQVEsR0FBUixFQUFhLGdCQUFnQixDQUFDLEtBQTlCLENBdkJBLENBQUE7O0FBQUEsRUF3QkEsR0FBRyxDQUFDLEdBQUosQ0FBUSxRQUFSLEVBQWtCLGdCQUFnQixDQUFDLEtBQW5DLENBeEJBLENBQUE7O0FBQUEsRUF5QkEsR0FBRyxDQUFDLEdBQUosQ0FBUSxXQUFSLEVBQXFCLGdCQUFnQixDQUFDLFFBQXRDLENBekJBLENBQUE7O0FBQUEsRUEwQkEsR0FBRyxDQUFDLEdBQUosQ0FBUSxVQUFSLEVBQW9CLGdCQUFnQixDQUFDLE9BQXJDLENBMUJBLENBQUE7O0FBQUEsRUEyQkEsR0FBRyxDQUFDLEdBQUosQ0FBUSxVQUFSLEVBQW9CLGdCQUFnQixDQUFDLE9BQXJDLENBM0JBLENBQUE7O0FBQUEsRUE4QkEsTUFBTSxDQUFDLE9BQVAsR0FBaUIsR0E5QmpCLENBQUE7QUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8iLCJzb3VyY2VzQ29udGVudCI6WyJleHByZXNzID0gcmVxdWlyZSAnZXhwcmVzcydcblxuQVNTRVRfQlVJTERfUEFUSCA9ICdjbGllbnQnXG5QT1JUID0gcHJvY2Vzcy5lbnYuUE9SVCA/IDMwMDBcblxuIyBjb250cm9sbGVyc1xucHVibGljQ29udHJvbGxlciA9IHJlcXVpcmUgJy4vc2VydmVyL2NvbnRyb2xsZXJzL3B1YmxpY19jb250cm9sbGVyJ1xuXG5hcHAgPSBleHByZXNzKClcbmFwcC5jb25maWd1cmUgLT5cbiMgamFkZSB0ZW1wbGF0ZXMgZnJvbSB0ZW1wbGF0ZXMgZGlyXG4gICAgYXBwLnVzZSBleHByZXNzLmNvbXByZXNzKClcbiAgICBhcHAuc2V0ICd2aWV3cycsIFwiI3tfX2Rpcm5hbWV9L3NlcnZlci90ZW1wbGF0ZXNcIlxuICAgIGFwcC5zZXQgJ3ZpZXcgZW5naW5lJywgJ2phZGUnXG5cbiAgICAjIHNlcnZlIHN0YXRpYyBhc3NldHNcbiAgICBhcHAudXNlKCcvYXNzZXRzJywgZXhwcmVzcy5zdGF0aWMoXCIje19fZGlybmFtZX0vI3tBU1NFVF9CVUlMRF9QQVRIfVwiKSlcblxuICAgICMgbG9nZ2luZ1xuICAgIGFwcC51c2UgZXhwcmVzcy5sb2dnZXIoKVxuICAgIGFwcC5zZXQgJ3BvcnQnLCBQT1JUXG5cbiMgcHVibGljIHJvdXRlc1xuYXBwLmdldCAnLycsIHB1YmxpY0NvbnRyb2xsZXIuaW5kZXhcbmFwcC5nZXQgJy9hYm91dCcsIHB1YmxpY0NvbnRyb2xsZXIuYWJvdXRcbmFwcC5nZXQgJy9wcm9kdWN0cycsIHB1YmxpY0NvbnRyb2xsZXIucHJvZHVjdHNcbmFwcC5nZXQgJy9nYWxsZXJ5JywgcHVibGljQ29udHJvbGxlci5nYWxsZXJ5XG5hcHAuZ2V0ICcvY29udGFjdCcsIHB1YmxpY0NvbnRyb2xsZXIuY29udGFjdFxuXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwXG5cblxuIl19