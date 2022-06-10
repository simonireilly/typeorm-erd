import { DataSource, EntityMetadata } from "typeorm";
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

/**
 * Render a plantuml string based on the specification here:
 * https://plantuml.com/ie-diagram
 */
export class PlantUMLErd {
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
    return `@startuml\nskinparam linetype ortho\n${this.renderTables()}\n${this.renderRelations()}\n@enduml`;
  }

  public renderRelations() {
    return this.buildRelations().join("\n");
  }

  public buildRelations() {
    return Object.entries(this.relations).reduce((acc, [key, values]) => {
      const relations = values.entityRelations.map((rel) => {
        // Remove unnamed relations and only add relations for the explicit owner
        if (!rel.propertyPath || !rel.isOwning) return "";

        return `${rel.source} ${RelationShips["left"][rel.relationType]}--${
          RelationShips["right"][rel.relationType]
        } ${rel.target}`;
      });

      return [...acc, ...relations.filter(Boolean)];
    }, [] as string[]);
  }

  private renderTables() {
    return this.meta
      .map((entry) => {
        const columns = entry.columns.map((column) => {
          const { databaseName, isPrimary, referencedColumn, comment, length } =
            column;

          const normalizedColumnName = this.dataSource.driver
            .normalizeType(column)
            .toUpperCase();
          const columnName = length
            ? `${normalizedColumnName}(${length})`
            : normalizedColumnName;

          return [
            databaseName,
            columnName,
            isPrimary ? "<<PK>>" : referencedColumn ? "<<FK>>" : "",
            comment && `//"${comment}"//`,
          ]
            .filter(Boolean)
            .join(" : ");
        });

        return `entity "${entry.tableName}" {\n    ${columns.join(
          "\n    --\n    "
        )}\n}`;
      })
      .join("\n");
  }
}
