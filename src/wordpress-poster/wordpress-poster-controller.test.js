const { getAllPosts } = require("./wordpress-poster-controller");

describe("test if wordpress REST API from address is reachable", () => {

  it("should retrieve valid posts from wordpress's news blog", async() => {
    const response = await getAllPosts('https://wordpress.org/news/wp-json/wp/v2/posts')
    expect(response.length).not.toBe(0)
    expect(response[0].id).not.toBe(null)
    expect(response[0].date_gmt).not.toBe(null)
    expect(response[0].date).not.toBe(null)
    expect(response[0].slug).not.toBe(null)
    expect(response[0].link).not.toBe(null)
  });

  it("should retrieve valid posts from the blog inserted in the constants", async() => {
    const response = await getAllPosts()
    expect(response.length).not.toBe(0)
    expect(response[0].id).not.toBe(null)
    expect(response[0].date_gmt).not.toBe(null)
    expect(response[0].date).not.toBe(null)
    expect(response[0].slug).not.toBe(null)
    expect(response[0].link).not.toBe(null)
  });
});