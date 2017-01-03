var gulp = require("gulp"),
    less = require("gulp-less"),
    browserSync = require("browser-sync"),
    path = {
        HTML : "*.html",
        LESS : "less/*.less",
        CSS : "css/*.css",
        JS : "js/*.js"
    };

gulp.task("serve", ["css","js-watch", "html"], function() {
    browserSync.init({
        server : "G:/XAMPP/htdocs/html"
    });

    gulp.watch(path.CSS, ["css"]);
    gulp.watch(path.JS, ["js-watch"]);
    gulp.watch(path.HTML, ["html"]);
    gulp.watch(path.HTML).on("change", function() {
        browserSync.reload;
    });
});


gulp.task("css", function() {
    gulp.src(path.CSS)
        .pipe(browserSync.stream());
})


gulp.task("js-watch", function() {
    gulp.src(path.JS)
    .pipe(browserSync.stream());
})

gulp.task("html", function() {
    gulp.src(path.HTML)
    .pipe(browserSync.stream());
})

gulp.task("default", ["serve"])