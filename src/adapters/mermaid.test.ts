import { AppDataSource } from "../../examples/basic/src/data-source";
import { AppDataSource as CartData } from "../../examples/shopping-cart/src/data-source";
import { Mermaid } from "./mermaid";

describe("mermaid adapter", () => {
  describe("integration tests", () => {
    test("renders the complete basic tables", async () => {
      const erd = new Mermaid(AppDataSource);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });
    test("renders the complete cart tables", async () => {
      const erd = new Mermaid(CartData);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });
  });

  describe("public methods", () => {
    it("renderRelations", async () => {
      const erd = new Mermaid(AppDataSource);

      await erd.initialize();

      expect(erd.buildRelations()).toEqual(["comment }|--|| user: author"]);
    });
  });
});
