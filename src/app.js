const express = require("express");
const bodyParser = require("body-parser");
const { getPostsFromPage } = require("./instagram-fetcher/instagram-fetcher-controller");
const { PAGE_ID_TO_FETCH } = require("./instagram-fetcher/instagram-fetcher");
const { getAllPosts } = require("./wordpress-poster/wordpress-poster-controller");

const app = express();
app.use(bodyParser.json());

app.get("/instagram_posts/new", (req, res) => {
  res.send(read(getPostsFromPage, req));
});

app.get("/instagram_posts/all", (req, res) => {
    // @TODO
});

app.post("/update_blog", (req, res) => {
    // @TODO
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log(`🚀 app listening on port ${port}`);

async function loadPosts() {
  let posts = await getAllPosts()
  console.log("posts!!", posts)
}
 
loadPosts()