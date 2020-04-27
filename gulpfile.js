var gulp = require('gulp');

function css() {
	var postcss = require('gulp-postcss');

	return gulp.src('assets/style.css')
		.pipe(postcss([
			require('tailwindcss'),
			require('autoprefixer'),
		]))
		.pipe(require('gulp-purgecss')({
			content: ['**/*.html'],
			defaultExtractor: function(content) {
				return content.match(/[\w-/:]+(?<!:)/g) || [];
			},
		}))
		.pipe(postcss([
			require('postcss-clean'),
		]))
		.pipe(require('gulp-rename')({ suffix: '.min' }))
		.pipe(gulp.dest('assets'));
}

function watch() {
	gulp.watch(['assets/style.css', '_includes/**/*.html', '_layouts/**/*.html', 'tailwind.config.js'], css);
}

exports.css = css;
exports.default = watch;
