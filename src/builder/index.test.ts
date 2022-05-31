import { AppDataSource } from "../../examples/basic/src/data-source";
import { builders } from "./";

describe("building test data", () => {
  it("returns the meta data", async () => {
    const meta = await builders.entityMetaData(AppDataSource);

    expect(meta).toMatchSnapshot();
  });
});
