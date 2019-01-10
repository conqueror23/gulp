var gulp = require('gulp')
var imagemin = require('gulp-imagemin')

//success in default gulp and imageminifies progress

gulp.task('default',()=>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
		)
