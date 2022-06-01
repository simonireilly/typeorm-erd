import { AppDataSource } from "../../examples/basic/src/data-source";
import { AppDataSource as ShoppingCartData } from "../../examples/shopping-cart/src/data-source";
import { builders } from "./";

describe("builders", () => {
  describe("entity metadata builder", () => {
    it("returns the meta data", async () => {
      const meta = await builders.entityMetaData(AppDataSource);

      expect(meta).toMatchSnapshot();
    });
  });
  describe("relation builder", () => {
    it("returns the relations", async () => {
      const meta = await builders.entityMetaData(AppDataSource);
      const relations = builders.relations(meta);

      expect(relations).toEqual({
        comment: {
          entityRelations: [
            {
              inverseSidePropertyPath: "",
              nullable: true,
              isOwning: true,
              propertyPath: "author",
              relationType: "many-to-one",
              source: "comment",
              target: "user",
            },
          ],
        },
        user: {
          entityRelations: [
            {
              inverseSidePropertyPath: "author",
              nullable: false,
              isOwning: false,
              propertyPath: "comments",
              relationType: "one-to-many",
              source: "user",
              target: "comment",
            },
          ],
        },
      });
    });
  });
});
