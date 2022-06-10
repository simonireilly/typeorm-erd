import { writeFileSync } from "fs";
import { AppDataSource } from "./examples/shopping-cart/src/data-source";
import { ERDBuilder } from "./src";

const CODE_BLOCK = "```";
const MERMAID_TEMPLATE = (erd: string) =>
  `${CODE_BLOCK}mermaid\n${erd}\n${CODE_BLOCK}`;
const PLANTUML_TEMPLATE = (erd: string) =>
  `${CODE_BLOCK}plantuml\n${erd}\n${CODE_BLOCK}`;

const main = async () => {
  const mermaid = new ERDBuilder("mermaid", AppDataSource);
  await mermaid.initialize();
  const mermaidErd = mermaid.render();

  const plantuml = new ERDBuilder("plantuml", AppDataSource);
  await plantuml.initialize();
  const plantumlErd = plantuml.render();

  const template = `## Mermaid

${MERMAID_TEMPLATE(mermaidErd)}
  
## Plantuml

${PLANTUML_TEMPLATE(plantumlErd)}

`;

  writeFileSync(`./examples.md`, template);
};

main();
