const { src, dest, watch } = require('gulp');
const { normalizeOpts, prefixGlobs } = require('@hugsmidjan/gulp-utils');

const defaultOpts = {
  name: 'copyFiles', // the display name of the generated tasks
  src: 'src/',
  dist: 'pub/',
  glob: [], // which files to glob up as entry points
};

module.exports = (opts) => {
  opts = normalizeOpts(opts, defaultOpts);
  const globs = prefixGlobs(opts.glob, opts.src);

  const copyTask = () => src(globs, { base: opts.src }).pipe(dest(opts.dist));

  const watchTask = () =>
    watch(globs)
      .on('change', copyTask)
      .on('add', copyTask);

  copyTask.displayName = opts.name;
  watchTask.displayName = opts.name + '_watch';

  const ret = [copyTask, watchTask];
  ret.copy = copyTask;
  ret.watch = watchTask;

  return ret;
};
