import { DataSource, EntityMetadata } from "typeorm";
import { RelationMetadata } from "typeorm/metadata/RelationMetadata";
import { BuilderRelations, builders } from "../builder";

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
  private relations: BuilderRelations;

  constructor(
    readonly dataSource: DataSource,
    private entityBuilder = builders.entityMetaData,
    private relationBuilder = builders.relations
  ) {
    this.dataSource = dataSource;
    this.entityBuilder = entityBuilder;
  }

  public async initialize() {
    this.meta = await this.entityBuilder(this.dataSource);
    this.relations = await this.relationBuilder(this.meta);
  }

  public render(): string {
    return `erDiagram\n  ${this.renderTables()}\n  ${this.renderRelations()}`;
  }

  public renderRelations() {
    return this.buildRelations().join("\n  ");
  }

  public buildRelations() {
    return Object.entries(this.relations).reduce((acc, [key, values]) => {
      const relations = values.entityRelations.map((rel) => {
        // Remove unnamed relations and only add relations for the explicit owner
        if (!rel.propertyPath || !rel.isOwning) return "";

        return `${rel.source} ${RelationShips["left"][rel.relationType]}--${
          RelationShips["right"][rel.relationType]
        } ${rel.target}: ${rel.propertyPath}`;
      });

      return [...acc, ...relations.filter(Boolean)];
    }, [] as string[]);
  }

  private renderTables() {
    return this.meta
      .map((entry) => {
        const columns = entry.columns.map((column) => {
          return [
            this.dataSource.driver.normalizeType(column),
            column.databaseName,
            column.isPrimary ? "PK" : column.referencedColumn ? "FK" : "",
            column?.comment && `"${column?.comment}"`,
          ]
            .filter(Boolean)
            .join(" ");
        });

        return `${entry.tableName} {\n    ${columns.join("\n    ")}\n  }`;
      })
      .join("\n  ");
  }
}
