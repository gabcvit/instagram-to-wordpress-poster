const fetch = require('node-fetch');
const { WORDPRESS_REST_API, WORDPRESS_PASSWORD } = require('./wordpress-poster');

// const createNewPost = async (postTitle) => {
//   return await fetch(WORDPRESS_REST_API, {
//     method: "POST",
//     headers:{
//       'Authorization': 'Basic ' + WORDPRESS_PASSWORD
//     },
//     body: {
//       title: postTitle,
//       status: 'draft'
//     }
//   })
//   .then(response => {
//     return response.json()
//   })
//   .catch(err => {
//     console.log(err);
//   });
// };

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
  //createNewPost,
  getAllPosts
};