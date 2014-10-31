var gulp =          require('gulp');
var sass =          require('gulp-sass');
var autoprefixer =  require('gulp-autoprefixer');
var webserver =     require('gulp-webserver');

gulp.task('sass', function() {
  gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./sass/*.scss', ['sass']);
});

gulp.task('server', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true
    }));
});

gulp.task('default', ['sass', 'watch', 'server'], function() {});

var dist = {
	files: [
		'css/**/*.*',
		'js/**/*.*',
		'img/**/*.*/',
		'index.html'
	],
	dest: 'dist'
};

gulp.task('build', ['sass'], function() {
	return gulp.src(dist.files, { base: '.' })
		.pipe(gulp.dest(dist.dest));
});
