#!/usr/bin/env node

import { ERDBuilder } from "./index";
import { resolve } from "path";

const main = async (path: string = "./examples/basic/src/data-source") => {
  const filePath = resolve(path);
  console.log("CWD Stats:", { cwd: process.cwd(), filePath });

  const moduleA = await import(filePath);
  console.info("Module", moduleA);
  const erd = new ERDBuilder("mermaid", moduleA);
  await erd.initialize();
  const erdText = await erd.render();

  console.info(erdText);
};

main();
