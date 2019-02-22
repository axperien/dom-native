const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const rename = require("gulp-rename");
const del = require('del');

const clean = () => {
    return del('dist/js');
}

const build = () => {
    gulp.src('src/index.js')
        .pipe(babel({
            presets: ['env', 'stage-0'],
        }))
        .pipe(gulp.dest('dist/js'))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
        }))
        .pipe(gulp.dest('dist/js'));
};

gulp.task('default', build, gulp.series(
    clean
));