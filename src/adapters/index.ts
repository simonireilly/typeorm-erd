import { DataSource } from "typeorm";
import { MermaidErd } from "./mermaid";
import { PlantUMLErd } from "./plantuml";

const BUILDERS = {
  mermaid: MermaidErd,
  plantuml: PlantUMLErd,
};

type TBuildTypes = keyof typeof BUILDERS;

/**
 * The ERD build returns the string representation of the ERD for the chosen
 * markdown language. Provide an TypeORM DataSource to the initializer.
 *
 * @example
 *
 * const mermaid = new ERDBuilder("mermaid", AppDataSource);
 * await mermaid.initialize();
 * mermaid.render();
 *
 */
class ERDBuilder {
  private instance: MermaidErd | PlantUMLErd;

  constructor(public instanceType: TBuildTypes, dataSource: DataSource) {
    const adapter = BUILDERS[instanceType];
    this.instance = new adapter(dataSource);
  }

  /**
   * Initialize the ERD to have the current entity relations for the DataSource
   */
  public async initialize() {
    return this.instance.initialize();
  }

  /**
   * Render the ERD to a string
   */
  public render(): string {
    return this.instance.render();
  }
}

export { PlantUMLErd, MermaidErd, ERDBuilder };
