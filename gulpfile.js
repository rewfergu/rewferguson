const gulp = require('gulp');
const nunjucks = require('nunjucks');
const gnunjucks = require('gulp-nunjucks');
const data = require('gulp-data');
const fm = require('front-matter');
const marked = require('marked');
var renderer = new marked.Renderer();
var fs = require('fs');
var ext = require('gulp-ext');
const through = require('through2');
const siteData = require('./site.json');
const siteFunctions = require('./site_functions.js');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var path = require('path');

// add siteFunction to the siteData object
Object.assign(siteData, siteFunctions);

// gulp.task("renderMarkdown", () =>
//   gulp
//   .src("src/**/*.md")
//   .pipe(
//     data(function(file) {
//       var content = fm(String(file.contents));
//       file.contents = new Buffer(
//         marked(content.body, {
//           renderer: renderer
//         })
//       );
//       return content.attributes;
//     })
//   )
//   .pipe(
//     data(function(file) {
//       // console.log("data", file.data);
//       // console.log("contents", file.contents.toString());

//       const md = file.contents.toString();
//       file.contents = fs.readFileSync(
//         path.resolve(__dirname, "templates", file.data.template)
//       );
//       //file.contents = Buffer.from(file.data.template);

//       return Object.assign({}, file.data, {
//         body: md,
//         site: siteData
//       });
//     })
//   )
//   .pipe(gnunjucks.compile())
//   .pipe(ext.replace("html"))
//   .pipe(gulp.dest("dist"))
// );

gulp.task('renderMarkdown', () =>
  gulp
    .src('src/**/*.md')
    .pipe(
      data(function(file) {
        var content = fm(String(file.contents));
        file.contents = new Buffer(
          marked(content.body, {
            renderer: renderer
          })
        );
        return content.attributes;
      })
    )
    .pipe(
      data(function(file) {
        // console.log("data", file.data);
        // console.log("contents", file.contents.toString());

        const md = file.contents.toString();
        file.contents = fs.readFileSync(
          path.resolve(__dirname, 'templates', file.data.template)
        );
        //file.contents = Buffer.from(file.data.template);

        return Object.assign({}, file.data, {
          body: md,
          site: siteData
        });
      })
    )
    .pipe(renderMarkdown())
    .pipe(ext.replace('html'))
    .pipe(gulp.dest('dist'))
);

gulp.task('renderTemplates', () => {
  return gulp
    .src('src/**/*.html')
    .pipe(renderNunjucks())
    .pipe(gulp.dest('dist'));
});

const env = new nunjucks.Environment(
  new nunjucks.FileSystemLoader([
    path.resolve(__dirname, 'templates'),
    path.resolve(__dirname, 'templates/includes')
  ])
);

function renderNunjucks() {
  return through.obj(function(file, enc, cb) {
    const output = env.renderString(file.contents.toString(), {
      site: siteData
    });
    file.contents = Buffer.from(output);

    this.push(file);

    cb();
  });
}

function renderMarkdown() {
  return through.obj(function(file, enc, cb) {
    const options = Object.assign({}, file.data, {
      site: siteData
    });

    const output = env.renderString(file.contents.toString(), options);
    file.contents = Buffer.from(output);

    this.push(file);

    cb();
  });
}

gulp.task(
  'serve',
  ['renderTemplates', 'renderMarkdown', 'sass', 'js'],
  function() {
    browserSync.init({
      server: './dist'
    });

    gulp.watch('src/scss/**/*.scss', ['sass']);
    gulp.watch(
      ['src/**/*.html', 'templates/**/*.html'],
      ['renderTemplates', 'renderMarkdown']
    );
    gulp.watch('src/**/*.md', ['renderMarkdown', 'renderTemplates']);
    gulp.watch('dist/**/*.html').on('change', browserSync.reload);
  }
);

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
  return gulp
    .src(['src/scss/style.scss', 'src/scss/journal.scss'])
    .pipe(
      sass({
        includePaths: ['node_modules']
      })
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      })
    )
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src('src/js/*.js').pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['renderTemplates', 'renderMarkdown']);

//gulp.task("build", runSequence("renderTemplates", "renderMarkdown", "serve"));
