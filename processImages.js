const sharp = require('sharp');
var glob = require('glob');
var mkdirp = require('mkdirp');
var rimraf = require('rimraf');
var _ = require('lodash');
var fs = require('fs');

glob('data/projects/**/*.{jpg,png,svg}', function(er, files) {
  // remove old projects folder
  rimraf('static/images/projects', function() {
    // loop over files
    files.forEach(function(file) {
      var fileArray = String(file).split('/');
      var fileName = fileArray.pop().split('.');
      var ext = fileName.pop();
      var dataPath = _.slice(fileArray, 1);
      var imagePath = ['static', 'images'].concat(dataPath);

      // create the folder structure if it doesn't exist
      mkdirp(imagePath.join('/'), function(err) {
        // console.log(
        //   imagePath.join('/') + '/' + fileName.join('.') + '-400.' + ext
        // );
        var options = {
          withoutEnlargement: true
        };

        if (ext === 'svg') {
          fs
            .createReadStream(file)
            .pipe(
              fs.createWriteStream(
                imagePath.join('/') + '/' + fileName.join('.') + '.' + ext
              )
            );
          // sharp(file).toFile(
          //   imagePath.join('/') + '/' + fileName.join('.') + '.' + ext
          // );
          return;
        }

        console.log(`processing: ${fileName.join('.')}.${ext}`);

        sharp(file)
          .resize({ width: 400, withoutEnlargement: true })
          .toFile(
            imagePath.join('/') + '/' + fileName.join('.') + '-400.' + ext
          );
        sharp(file)
          .resize({ width: 800, withoutEnlargement: true })
          .toFile(
            imagePath.join('/') + '/' + fileName.join('.') + '-800.' + ext
          );
        sharp(file)
          .resize({ width: 1200, withoutEnlargement: true })
          .toFile(
            imagePath.join('/') + '/' + fileName.join('.') + '-1200.' + ext
          );
        sharp(file)
          .resize({ width: 2000, withoutEnlargement: true })
          .toFile(
            imagePath.join('/') + '/' + fileName.join('.') + '-2000.' + ext
          );
      });
    });
  });
});
