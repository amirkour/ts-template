import { ConnectFour } from "../src";
describe("connect-four", () => {
  it("returns stuff", () => {
    const a = new ConnectFour();
    expect(a.doStuff().bax).not.toBeNull();
  });
});
