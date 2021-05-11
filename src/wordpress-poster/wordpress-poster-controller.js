const fetch = require('node-fetch');
const { WORDPRESS_REST_API, WORDPRESS_PASSWORD } = require('./wordpress-poster');

const createNewPost = async (postTitle) => {
  var params = {
    status: 'draft',
    "title": postTitle,
    "content_raw": "Howdy updated content.",
    "date": "2017-02-01T14:00:00+10:00"
  }
  return await fetch(WORDPRESS_REST_API, {
    method: "POST",
    headers:{
      // 'Content-Type': 'application/json',
      // "Accept": "application/json",
      'Authorization': 'Basic ' + WORDPRESS_PASSWORD
    },
    body: params
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err);
  });
};

const getAllPosts = async (forceAddress = null) => {
  let urlToRequest = forceAddress ? forceAddress : WORDPRESS_REST_API
  return await fetch(urlToRequest, {
    method: "GET",
    headers:{
      'Authorization': 'Basic ' + WORDPRESS_PASSWORD
    },
  })
  .then(response => {
    return response.json()
  })
  .catch(err => {
    console.log(err);
  });
};

module.exports = { 
  createNewPost,
  getAllPosts
};