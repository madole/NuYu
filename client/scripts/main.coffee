VENDOR = "/assets/public/js/vendor"
requirejs.config
    paths:
        'jquery': "#{VENDOR}/jquery.min"
        'backbone': "#{VENDOR}/backbone.min"
        'underscore': "#{VENDOR}/underscore.min"
        'jade': "#{VENDOR}/jade.min"
        'bootstrap': "#{VENDOR}/bootstrap.min"
    shim:
        'jquery':
            exports: '$'
        'backbone':
            deps: ['underscore', 'jquery']
            exports: 'Backbone'
        'underscore':
            exports: '_'
        'jade':
            exports: 'jade'
        'bootstrap':
            deps: ['jquery']


requirejs ['jquery', 'bootstrap'], ($, bootstrap) ->
    $('#carousel-generic').carousel()