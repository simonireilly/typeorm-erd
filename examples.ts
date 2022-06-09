import { writeFileSync } from "fs";
import { AppDataSource as BasicDataSource } from "./examples/basic/src/data-source";
import { AppDataSource as CartDataSource } from "./examples/shopping-cart/src/data-source";
import { AppDataSource as JoinTableDataSource } from "./examples/join-tables/src/data-source";
import { MermaidErd } from "./src/adapters/mermaid";

const CODE_BLOCK = "```";
const TEMPLATE = (erd: string) => `${CODE_BLOCK}mermaid\n${erd}\n${CODE_BLOCK}`;

const main = async () => {
  const carts = new MermaidErd(CartDataSource);
  await carts.initialize();
  const cartsMermaidErd = carts.render();

  const basic = new MermaidErd(BasicDataSource);
  await basic.initialize();
  const basicMermaidErd = basic.render();

  const joinTable = new MermaidErd(JoinTableDataSource);
  await joinTable.initialize();
  const joinTableMermaidErd = joinTable.render();

  const template = `## Basic

${TEMPLATE(basicMermaidErd)}
  
## Join Table

${TEMPLATE(joinTableMermaidErd)}


## Carts

${TEMPLATE(cartsMermaidErd)}
`;

  writeFileSync(`./examples.md`, template);
};

main();
