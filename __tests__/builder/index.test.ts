import { AppDataSource as BasicDataSource } from "../../examples/basic/src/data-source";
import { AppDataSource as JoinTableDataSource } from "../../examples/join-tables/src/data-source";
import { builders } from "../../src/builder";

describe("builders", () => {
  describe("entity metadata builder", () => {
    it("returns the meta data", async () => {
      const meta = await builders.entityMetaData(BasicDataSource);

      expect(meta).toMatchSnapshot();
    });
  });

  describe("relation builder", () => {
    it("returns the relations", async () => {
      const meta = await builders.entityMetaData(BasicDataSource);
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

    it("join tables", async () => {
      const meta = await builders.entityMetaData(JoinTableDataSource);
      const relations = builders.relations(meta);

      expect(relations).toEqual({
        product: {
          entityRelations: [
            {
              inverseSidePropertyPath: "products",
              nullable: false,
              isOwning: true,
              propertyPath: "tags",
              joinTableName: "product_tag",
              relationType: "one-to-many",
              source: "product",
              target: "product_tag",
            },
          ],
        },
        tag: {
          entityRelations: [
            {
              inverseSidePropertyPath: "tags",
              nullable: false,
              isOwning: true,
              joinTableName: "product_tag",
              propertyPath: "products",
              relationType: "one-to-many",
              source: "tag",
              target: "product_tag",
            },
          ],
        },
        product_tag: {
          entityRelations: [],
        },
      });
    });
  });
});
