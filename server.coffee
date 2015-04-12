app = require './app'
http = require 'http'


# Server
http.createServer(app).listen app.get('port'), ->
    console.log "Express server listening on port #{app.get('port')}"
    console.log 'Process ID: ' + process.pid