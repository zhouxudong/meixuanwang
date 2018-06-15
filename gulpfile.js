var path = require("path");
var gulp = require("gulp");
var less = require("gulp-less");
var LessAutoprefix = require("less-plugin-autoprefix");
var autoprefix = new LessAutoprefix({ browsers: ['last 2 versions'] });

var srcPathRoot = path.resolve(__dirname, "./src");
var destPathRoot = path.resolve(__dirname, "./build");


gulp.task("less", function () {
    return gulp.src(path.resolve(srcPathRoot, "./less/**/*.less"))
        .pipe(less({
            paths: [path.resolve(srcPathRoot, "less", 'includes')]
        }))
        .pipe(gulp.dest(path.resolve(destPathRoot, "./css")))
})

gulp.task("default", function () {

});