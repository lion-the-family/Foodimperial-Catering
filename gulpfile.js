const { src, dest, parallel, series, watch } = require('gulp');

const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');

const rollup = require('gulp-rollup');
const babel = require('rollup-plugin-babel');

const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const cleanCSS = require('gulp-clean-css');
const modifyCssUrls = require('gulp-modify-css-urls');

const imageMin = require('gulp-imagemin');
const rename = require('gulp-rename');

const newer = require('gulp-newer');
const del = require('del');

//BROWSER 'SYNC'

function initBrowserSync() {
  browserSync.init({
    server: { baseDir: 'app' },
    notify: false,
    open: false
  });
}

// STYLES

const styleModules = [
  'app/sass/config.sass',
  'app/sass/common/*.sass',
  'app/sass/elements/*.sass',
  'app/sass/structure-sections/**/*.sass'
];

const modifyCssUrlsOptions = {
  modify: (url, filePath) => {
    let newUrl = url;
    const reverseCwd = '../';

    if (url.includes('/img/')) {
      let pos = url.indexOf('/img/');
      newUrl = `..${url.slice(pos)}`;
    }

    return newUrl;
  },
  prepend: '',
  append: ''
};

function buildAppStyles() {
  return src(styleModules)
    .pipe(sourcemaps.init())
    .pipe(concat('styles.min.sass'))
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(dest('app/css/'))
    .pipe(browserSync.stream());
}

function buildDistStyles() {
  return src(styleModules)
    .pipe(concat('styles.min.sass'))
    .pipe(sass())
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    // .pipe(cleanCSS(({ level: { 1: { specialComments: 0 } }/*, format: 'beautify'*/ })))
    .pipe(modifyCssUrls(modifyCssUrlsOptions))
    .pipe(dest('app/css/'));
}

// SCRIPTS

const rollupOptions = {
  allowRealFiles: true,
  input: 'app/js/app.js',

  output: {
    format: 'iife'
  },

  plugins: [
    babel({
      presets: ['@babel/env']
    })
  ],
};

function buildAppScripts() {
  return src('app/js/app.js')
    .pipe(sourcemaps.init())
    .pipe(rollup(rollupOptions))
    .pipe(rename('scripts.min.js'))
    .pipe(sourcemaps.write())
    .pipe(dest('app/js/'))
    .pipe(browserSync.stream());
}

function buildDistScripts() {
  return src('app/js/app.js')
    .pipe(rollup(rollupOptions))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(dest('app/js/'))
}

// IMAGES

function minimazeImages() {
  return src('app/img/**/*')
    .pipe(newer('dist/img/**/*'))
    .pipe(imageMin())
    .pipe(dest('dist/img/'));
}

function cleanMinImages() {
  return del('dist/img/**/*', { force: true });
}

// BUILD

function buildCopy() {
  return src([
    'app/css/*.min.css',
    'app/js/*.min.js',
    'app/index.html',
    'app/fonts/*'
  ], { base: 'app' })
    .pipe(dest('dist'));
}

function cleanDist() {
  return del('dist/**/*', { force: true });
}

// WATCH

function startWatching() {
  watch('app/index.html', browserSync.reload);
  watch(styleModules, buildAppStyles);
  watch(['app/js/**/*.js', '!app/js/scripts.min.js'], buildAppScripts);
}

exports.initBrowserSync = initBrowserSync;

exports.styles = buildAppStyles;
exports.scripts = buildAppScripts;

const appCodeBuild = series(buildAppStyles, buildAppScripts);
const distCodeBuild = series(buildDistStyles, buildDistScripts);

exports.minimazeImages = minimazeImages;
exports.cleanMinImages = cleanMinImages;

exports.build = series(cleanDist, distCodeBuild, buildCopy, minimazeImages);

exports.default = parallel(appCodeBuild,
  series(initBrowserSync, browserSync.reload), startWatching);