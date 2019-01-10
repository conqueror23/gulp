var gulp = require('gulp')
var imagemin = require('gulp-imagemin')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

//success in default gulp and imageminifies progress

gulp.task('js', function(){
    return gulp.src(['src/scripts/*.js', 'src/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('hello',function(ab){
	console.log('echo file has been changed and you will see it')
  ab() // using this line to marks the end of this task
})

gulp.task('watch1',function(){
  gulp.watch('gulpfile.js',gulp.start('hello'))
})

gulp.task('syn',function(){
	 gulp.watch ('src/script/echo.js',function(){
     gulp.start('hello') // can also replace
   })

})

//just here new a 

gulp.task('shows',function(){
  console.log('here oisdf more things');
})
