const dotenv = require('dotenv').config();
const ghpages = require('gh-pages');



ghpages.publish('./build', {
  branch: 'gh-pages',
  repo: 'https://github.com/ynft/images.git'
}, (error) => {
  if (error) {
    console.error(error);
  }
});
