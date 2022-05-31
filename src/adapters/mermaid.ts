import { DataSource, EntityMetadata } from "typeorm";
import { builders } from "../builder";

const RelationShips = {
  left: {
    "one-to-many": "||",
    "many-to-one": "}|",
    "one-to-one": "||",
    "many-to-many": "}|",
  },
  right: {
    "one-to-many": "|{",
    "many-to-one": "||",
    "one-to-one": "||",
    "many-to-many": "|{",
  },
};

export class Mermaid {
  private meta: EntityMetadata[];

  constructor(
    readonly dataSource: DataSource,
    private builder = builders.entityMetaData
  ) {
    this.dataSource = dataSource;
    this.builder = builder;
  }

  public async initialize() {
    this.meta = await this.builder(this.dataSource);
  }

  public render(): string {
    return `erDiagram\n  ${this.renderTables()} ${this.renderRelations()}`;
  }

  private renderRelations() {
    const relations = this.meta.reduce((acc, entity) => {
      const entityRelations = entity.ownRelations.map(
        ({ relationType, isOwning, inverseEntityMetadata }) => {
          const side = isOwning ? "left" : "right";
          return {
            source: entity.tableName,
            relation: RelationShips[side][relationType],
            target: inverseEntityMetadata.tableName,
          };
        }
      );

      return {
        ...acc,
        [entity.tableName]: {
          entityRelations,
        },
      };
    }, {});

    console.info("relations", relations);
  }

  private renderTables() {
    return this.meta
      .map((entry) => {
        const columns = entry.columns.map((column) => {
          return [
            this.dataSource.driver.normalizeType(column),
            column.databaseName,
            column.isPrimary ? "PK" : column.referencedColumn ? "FK" : "",
            column?.comment,
          ]
            .filter(Boolean)
            .join(" ");
        });

        return `${entry.tableName} {\n    ${columns.join("\n    ")}\n  }`;
      })
      .join("\n  ");
  }
}
