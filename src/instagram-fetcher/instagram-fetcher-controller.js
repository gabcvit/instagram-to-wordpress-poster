const fetch = require('node-fetch');

const getPostsFromPage = async (pageId) => {
  return await fetch(`https://www.instagram.com/${pageId}/channel/?__a=1`, {
    method: "GET",
    headers:{},
  })
  .then(response => {
    return response
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports = { 
  getPostsFromPage,
};