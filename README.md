# @hugsmidjan/gulp-images

```
npm install --save-dev @hugsmidjan/gulp-copy
```

## Usage

```js
const [copyFiles, copyWatch] = require('@hugsmidjan/gulp-copy')(opts);
```

## API / Advanced usage

```js
const copyTaskFactory = require('@hugsmidjan/gulp-copy');

const options = {
  // These are the defaults:
  name: 'copyFiles', // the display name of the generated tasks
  src: 'src/',
  dist: 'pub/',
  glob: [], // which files to glob up as entry points
  // glob: ['data/**/*.json', '!data/secret-stuff.json'] // <-- Example usage
};

// Create the gulp tasks based on the above options.
const copyTasks = copyTaskFactory(options);

// copyTasks is a two item array...
const [copyFiles, copyWatch] = copyTasks;
// ...but it also exposes the tasks as named properties.
const copyFiles = copyTasks.copy;
const copyWatch = copyTasks.watch;
```

