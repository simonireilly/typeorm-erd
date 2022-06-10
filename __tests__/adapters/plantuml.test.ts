import { AppDataSource } from "../../examples/basic/src/data-source";
import { AppDataSource as JoinDataSource } from "../../examples/join-tables/src/data-source";
import { AppDataSource as CartData } from "../../examples/shopping-cart/src/data-source";
import { PlantUMLErd } from "../../src/adapters";

describe("mermaid adapter", () => {
  describe("integration tests", () => {
    test("renders the complete basic tables", async () => {
      const erd = new PlantUMLErd(AppDataSource);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });

    test("renders the complete cart tables", async () => {
      const erd = new PlantUMLErd(CartData);
      await erd.initialize();

      expect(erd.render()).toMatchSnapshot();
    });
  });

  describe("public methods", () => {
    it("renderRelations", async () => {
      const erd = new PlantUMLErd(AppDataSource);

      await erd.initialize();

      expect(erd.buildRelations()).toEqual(["comment }|--|| user"]);
    });

    it("renderRelations", async () => {
      const erd = new PlantUMLErd(JoinDataSource);

      await erd.initialize();

      expect(erd.buildRelations()).toEqual([
        "tag ||--|{ product_tag",
        "product ||--|{ product_tag",
      ]);
    });
  });
});
