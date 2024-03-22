const sharp = require("sharp");
var { globSync } = require("glob");
var { mkdirp } = require("mkdirp");
var { rimrafSync } = require("rimraf");
var _ = require("lodash");
var fs = require("fs");

const files = globSync("src/data/projects/**/*.{jpg,png,svg}");

rimrafSync("public/images/projects");
// loop over files
files.forEach(function (file) {
  var fileArray = String(file).split("/");
  var fileName = fileArray.pop().split(".");
  var ext = fileName.pop();
  var dataPath = fileArray.slice(2);
  var imagePath = ["public", "images"].concat(dataPath);

  // create the folder structure if it doesn't exist
  mkdirp.sync(imagePath.join("/"));
  // console.log(
  //   imagePath.join('/') + '/' + fileName.join('.') + '-400.' + ext
  // );
  var options = {
    withoutEnlargement: true,
  };

  if (ext === "svg") {
    fs.createReadStream(file).pipe(
      fs.createWriteStream(
        imagePath.join("/") + "/" + fileName.join(".") + "." + ext
      )
    );
    // sharp(file).toFile(
    //   imagePath.join('/') + '/' + fileName.join('.') + '.' + ext
    // );
    return;
  }

  console.log(`processing: ${fileName.join(".")}.${ext}`);

  sharp(file)
    .resize({ width: 400, withoutEnlargement: true })
    .toFile(imagePath.join("/") + "/" + fileName.join(".") + "-400." + ext);
  sharp(file)
    .resize({ width: 800, withoutEnlargement: true })
    .toFile(imagePath.join("/") + "/" + fileName.join(".") + "-800." + ext);
  sharp(file)
    .resize({ width: 1200, withoutEnlargement: true })
    .toFile(imagePath.join("/") + "/" + fileName.join(".") + "-1200." + ext);
  sharp(file)
    .resize({ width: 2000, withoutEnlargement: true })
    .toFile(imagePath.join("/") + "/" + fileName.join(".") + "-2000." + ext);
});
