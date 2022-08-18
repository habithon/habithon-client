const { register } = require("../scripts/utils.js")

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve({success: true}),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("withFetch", () => {
  test("works", async () => {
    const data = await register({username: "ladybird", password: "qwerty"});
    expect(data.success).toEqual(true);
  });
});
