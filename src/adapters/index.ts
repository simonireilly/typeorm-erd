import { DataSource } from "typeorm";
import { MermaidErd } from "./mermaid";
import { PlantUMLErd } from "./plantuml";

const BUILDERS = {
  mermaid: MermaidErd,
  plantuml: PlantUMLErd,
};

type TBuildTypes = keyof typeof BUILDERS;

class ERDBuilder {
  private instance: MermaidErd | PlantUMLErd;

  constructor(public instanceType: TBuildTypes, dataSource: DataSource) {
    const adapter = BUILDERS[instanceType];
    this.instance = new adapter(dataSource);
  }

  public async initialize() {
    return this.instance.initialize();
  }

  public render(): string {
    return this.instance.render();
  }
}

export { PlantUMLErd, MermaidErd, ERDBuilder };
