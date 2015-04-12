gulp = require 'gulp'
coffee = require 'gulp-coffee'
sourceMaps = require 'gulp-sourcemaps'
sass = require "gulp-sass"
del = require 'del'
ignore = require 'gulp-ignore'


coffeeScripts = ["**/*.coffee"]
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
    del ['build/**/**/**/*.js'], cb

gulp.task 'clean:jade', (cb) ->
    del ['build/server/templates'], cb

gulp.task 'scripts', ['clean:js'], ->
    gulp.src(coffeeScripts)
        .pipe sourceMaps.init()
        .pipe coffee()
        .pipe sourceMaps.write()
        .pipe gulp.dest 'build'

gulp.task 'sass', ['clean:css'], ->
    gulp.src(sassFiles)
        .pipe sass()
        .pipe gulp.dest 'build/client/stylesheets'

gulp.task 'public', ['clean:public'], ->
    gulp.src(publicFiles)
        .pipe gulp.dest 'build/client/public'

gulp.task 'jade', ['clean:jade'], ->
    gulp.src(jadeFiles)
        .pipe gulp.dest 'build/server/templates'

gulp.task 'default', ['public', 'scripts', 'sass', 'jade', 'watch']

gulp.task 'watch', ->
    gulp.watch coffeeScripts, ['scripts']
    gulp.watch sassFiles, ['sass']
    gulp.watch jadeFiles, ['jade']
    gulp.watch publicFiles, ['public']