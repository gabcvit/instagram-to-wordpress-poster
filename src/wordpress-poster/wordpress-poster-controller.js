const fetch = require('node-fetch');
const { WORDPRESS_REST_API, WORDPRESS_PASSWORD } = require('./wordpress-poster');

const convertStringToBase64= (value) => {
  return Buffer.from(value).toString('base64')
}

const buildWordpressHeaders = () => {
  let encodedLogin = ''
  try {
    encodedLogin = convertStringToBase64(WORDPRESS_PASSWORD)
  } catch(e) {
    console.log('buildWordpressHeaders Error', e)
    throw(e)
  }

  return {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      "Accept": "application/json",
      'Authorization': 'Basic ' + encodedLogin
    },
  }
}

const createNewPost = async (body) => {
  var params = buildWordpressHeaders()

  params.body = JSON.stringify(body)

  return await fetch(WORDPRESS_REST_API, params)
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