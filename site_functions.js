var marked = require('marked');
var fm = require('front-matter');
var fs = require('fs');

function printProjects(obj, mode) {
  var objArray = [];

  for (item in obj) {
    if (obj[item].status === mode) {
      objArray.push(obj[item]);
    }
  }

  return objArray;
}

function renderArticle(url) {
  // var frontMatter = fm(fs.readFileSync(url, 'utf8'));
  // var pageContent = marked(fs.readFileSync(url, 'utf8'));

  // console.log('page content', pageContent);

  // return {
  //   metadata: frontMatter.attributes,
  //   content: pageContent
  // };

  console.log('hello', url);
}

function printLinks(folder) {
  var links = [];

  fs.readdirSync(`src/projects/${folder}/posts`).forEach(function(link) {
    var filePath = `src/projects/${folder}/posts/${link}`;
    // console.log('link', filePath);

    var frontMatter = fm(fs.readFileSync(filePath, 'utf8'));
    // console.log('front matter', frontMatter.attributes);

    var linkObject = {
      url: link.replace(/md$/, 'html'),
      title: frontMatter.attributes.title
    };

    links.push(linkObject);
  });

  // console.log('links', folder, links);

  return links;
}

module.exports = {
  printProjects,
  renderArticle,
  printLinks
};
