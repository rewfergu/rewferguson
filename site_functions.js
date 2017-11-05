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

function renderArticle(folder, link) {
  var filePath = `src/projects/${folder}/posts/${link}`;
  var fileContents = fs.readFileSync(filePath, 'utf8');

  var frontMatter = fm(fileContents);
  var pageContent = marked(frontMatter.body);

  return {
    metadata: frontMatter.attributes,
    content: pageContent
  };
}

// return an array of posts inside the project folder
function getProjectPosts(folder) {
  const posts = fs.readdirSync(`src/projects/${folder}/posts`);
  return posts;
}

// return an anchor tag with the post link
function printPostLink(folder, link) {
  const filePath = `src/projects/${folder}/posts/${link}`;
  const frontMatter = fm(fs.readFileSync(filePath, 'utf8'));

  return `<a href="${link.replace(/md$/, 'html')}">${frontMatter.attributes.title}</a>`;
}

// return an anchor tag with the project link
function printProjectLink(project, activeProject) {
  if (project.folder === activeProject) {
    return `<a class="current" href="/projects/${project.folder}">${project.name}</a>`;
  }
  return `<a href="/projects/${project.folder}">${project.name}</a>`;
}

function printLinks(folder) {
  var links = [];

  // fs.readdirSync(`src/projects/${folder}/posts`).forEach(function(link) {
  //   var filePath = `src/projects/${folder}/posts/${link}`;
  //   // console.log('link', filePath);

  //   var frontMatter = fm(fs.readFileSync(filePath, 'utf8'));
  //   // console.log('front matter', frontMatter.attributes);

  //   var linkObject = {
  //     url: link.replace(/md$/, 'html'),
  //     title: frontMatter.attributes.title
  //   };

  //   links.push(linkObject);
  // });

  // console.log('links', folder, links);

  return links;
}

module.exports = {
  printProjects,
  getProjectPosts,
  renderArticle,
  printProjectLink,
  printPostLink
};
