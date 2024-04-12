const fs = require('fs');
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');
const imageminPngquant = require('imagemin-pngquant');
const imagesDir = '/Users/kumareth/Documents/projects/personal-website/packages/web/public/images';
const outputDir = '/Users/kumareth/Documents/projects/personal-website/packages/web/public/images_2';
fs.readdir(imagesDir, (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  } 
  files.forEach((file, index) => {
    imagemin([imagesDir + '/' + file], {
      destination: outputDir,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: [0.6, 0.8]})
      ]
    }).then(() => {
      console.log(file + ' compressed successfully');
    });
  });
});
