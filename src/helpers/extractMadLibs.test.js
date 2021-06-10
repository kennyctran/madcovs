import extractMadLibs from "./extractMadLibs";

describe("extractMadLibs function", () => {
  it("should take in a string with no matching phrases", () => {
    const inputText = "There are no phrases here";
    const noPhrases = extractMadLibs(inputText, "_");

    expect(noPhrases).toEqual([]);
  });

  it("should return a phrase if string contains one", () => {
    const inputText = "__shoes__";
    const oneMatch = extractMadLibs(inputText, "_");
    expect(oneMatch).toEqual(["__shoes__"]);
  });

  it("should return multiple phrases", () => {
    const inputText = "__shoes__ __feet__";
    const allLibs = extractMadLibs(inputText, "_");
    expect(allLibs).toEqual(["__shoes__", "__feet__"]);
  });

  it("should not return the non-phrased sections", () => {
    const inputText = "__shoes__ and there is nothing __else__";
    const twoMatches = extractMadLibs(inputText, "_");
    expect(twoMatches).toEqual(["__shoes__", "__else__"]);
  });

  it("should work for any phrase", () => {
    const inputText = "**ay** and **may**";
    const twoMatches = extractMadLibs(inputText, "*");
    expect(twoMatches).toEqual(["**ay**", "**may**"]);
  });

  it("should take in a phrase that's a single character", () => {
    const inputText = "**shoe**";
    const noMatch = extractMadLibs(inputText, "**");
    expect(noMatch).toEqual([]);
  });
});
