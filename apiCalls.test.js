const axios = require("axios");
const getPokeData = require("./apiCalls");

describe("Pokemon API", () => {
  it("Calls api to get charizards data", async () => {
    expect.assertions(3);
    const data = await getPokeData(axios, "charizard");
    expect(data.id).toEqual(6);
    expect(data.name).toBe("charizard");
    expect(data.weight).toEqual(905);
  });

  it("Calls api to get mew", async () => {
    expect.assertions(3);
    const data = await getPokeData(axios, "mew");
    expect(data.id).toEqual(151);
    expect(data.name).toBe("mew");
    expect(data.weight).toEqual(40);
  });
});
