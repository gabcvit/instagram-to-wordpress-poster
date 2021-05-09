const { PAGE_ID_TO_FETCH } = require("./instagram-fetcher");
const { getPostsFromPage } = require("./instagram-fetcher-controller");

describe("load instagram page", () => {
  it("should fetch successfully main instagram page", async() => {
    const response = await getPostsFromPage('instagram')
    expect(Object.entries(response).length).not.toBe(0)
  });

  it("should fetch successfully page determined in constants", async() => {
    const response = await getPostsFromPage(PAGE_ID_TO_FETCH)
    expect(Object.entries(response).length).not.toBe(0)
  });
});