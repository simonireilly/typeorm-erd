import { AppDataSource } from "../../examples/basic/src/data-source";
import { AppDataSource as JoinDataSource } from "../../examples/join-tables/src/data-source";
import { AppDataSource as CartData } from "../../examples/shopping-cart/src/data-source";
import { MermaidErd } from "./../../src/adapters/mermaid";

describe("mermaid adapter", () => {
  describe("integration tests", () => {
    test("renders the complete basic tables", async () => {
      const erd = new MermaidErd(AppDataSource);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });

    test("renders the complete cart tables", async () => {
      const erd = new MermaidErd(CartData);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });
  });

  describe("public methods", () => {
    it("renderRelations", async () => {
      const erd = new MermaidErd(AppDataSource);

      await erd.initialize();

      expect(erd.buildRelations()).toEqual(["comment }|--|| user: author"]);
    });

    it("renderRelations", async () => {
      const erd = new MermaidErd(JoinDataSource);

      await erd.initialize();

      expect(erd.buildRelations()).toEqual([
        "tag ||--|{ product_tag: products",
        "product ||--|{ product_tag: tags",
      ]);
    });
  });
});
