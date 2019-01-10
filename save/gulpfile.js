var gulp = require('gulp');
var fs = require('fs');
var imagemin = require('gulp-imagemin');
var sass =  require('gulp-sass');

var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css')
var concat = require('gulp-concat')
var browserSync = require('browser-sync').create();

gulp.task('hello',function(){
//operations doing here
console.log('hello this is the first gulp program')
})

//complete

gulp.task('sass',function(){
	return gulp.src('app/scss/input.scss')
	.pipe(sass())
	.pipe(gulp.dest('app/css'))
})

gulp.task('create_blank',function(){
	fs.writeFile('new.txt','a simple string','utf8',function(err){
	if(err){
	console.log(err);
	}else{
		console.log('writing has completed');
	}
	})
})
// complete
gulp.task('imagemin', function(){
   var img_src = 'src/images/**/*', img_dest = 'build/images';

   gulp.src(img_src)
   .pipe(changed(img_dest))
   .pipe(imagemin())
   .pipe(gulp.dest(img_dest));
})

gulp.task('styles', function(){
   gulp.src(['src/styles/*.css'])
   .pipe(concat('styles.css'))
   .pipe(autoprefix('last 2 versions'))
   .pipe(minifyCSS())
   .pipe(gulp.dest('build/styles/'));
})


gulp.task("default",['hello'],function(){
   gulp.run('hello')
})


gulp.task('browserSync', function() {
   browserSync.init({
      server: {
         baseDir: 'build'
      },
   })
})
