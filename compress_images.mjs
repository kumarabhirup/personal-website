import fs from 'fs';
import imagemin from 'imagemin';
import imageminJpegtran from 'imagemin-jpegtran';
import imageminPngquant from 'imagemin-pngquant';
const imagesDir = '/Users/kumareth/Documents/projects/personal-website/packages/web/public/images';
const outputDir = '/Users/kumareth/Documents/projects/personal-website/packages/web/public/images_2';
fs.readdir(imagesDir, async (err, files) => {
  if (err) {
    console.error('Could not list the directory.', err);
    process.exit(1);
  } 
  for (const file of files) {
    await imagemin([imagesDir + '/' + file], {
      destination: outputDir,
      plugins: [
        imageminJpegtran(),
        imageminPngquant({quality: [0.6, 0.8]})
      ]
    });
    console.log(file + ' compressed successfully');
  }
});
