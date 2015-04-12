gulp        = require 'gulp'
coffee      = require 'gulp-coffee'
sourceMaps  = require 'gulp-sourcemaps'
sass        = require "gulp-sass"
del         = require 'del'
ignore      = require 'gulp-ignore'
nodemon     = require 'gulp-nodemon'
livereload  = require 'gulp-livereload'

coffeeScripts = ["./**/*.coffee", '!./node_modules/**/*.coffee']
sassFiles  = ["client/scss/**/*.scss"]
jadeFiles = ['server/templates/**/*.jade']
publicFiles = ['client/public/**/*']

gulp.task 'clean', (cb) ->
    del ['build'], cb

gulp.task 'clean:css', (cb) ->
    del ['build/client/stylesheets/**/*.css'], cb

gulp.task 'clean:public', (cb) ->
    del ['build/client/public'], cb

gulp.task 'clean:js', (cb) ->
    del ['build/**/*.js', '!./build/client/public'], cb

gulp.task 'clean:jade', (cb) ->
    del ['build/server/templates'], cb

gulp.task 'scripts', ['clean:js'], ->
    gulp.src(coffeeScripts)
        .pipe sourceMaps.init()
        .pipe coffee()
        .pipe sourceMaps.write()
        .pipe gulp.dest 'build'
        .pipe livereload()

gulp.task 'sass', ['clean:css'], ->
    gulp.src(sassFiles)
        .pipe sass()
        .pipe gulp.dest 'build/client/stylesheets'
        .pipe livereload()

gulp.task 'public', ['clean:public'], ->
    gulp.src(publicFiles)
        .pipe gulp.dest 'build/client/public'
        .pipe livereload()

gulp.task 'jade', ['clean:jade'], ->
    gulp.src(jadeFiles)
        .pipe gulp.dest 'build/server/templates'
        .pipe livereload()

gulp.task 'watch', ->
    livereload.listen()
    gulp.watch coffeeScripts, ['scripts']
    gulp.watch sassFiles, ['sass']
    gulp.watch jadeFiles, ['jade']
    gulp.watch publicFiles, ['public']

gulp.task 'start', ->
    nodemon script: 'build/server.js'
        .on 'restart', ->
            console.log 'Restarting ...'

gulp.task 'default', ['public', 'scripts', 'sass', 'jade', 'watch', 'start']
