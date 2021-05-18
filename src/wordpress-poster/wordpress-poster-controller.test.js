const { getAllPosts, createNewPost } = require("./wordpress-poster-controller");

describe("test if wordpress REST API from address is reachable", () => {

  it("should retrieve valid posts from wordpress's news blog", async() => {
    const response = await getAllPosts('https://wordpress.org/news/wp-json/wp/v2/posts')
    expect(response.length).not.toBe(0)
    expect(response[0].id).toBeTruthy()
    expect(response[0].date_gmt).toBeTruthy()
    expect(response[0].date).toBeTruthy()
    expect(response[0].slug).toBeTruthy()
    expect(response[0].link).toBeTruthy()
  });

});