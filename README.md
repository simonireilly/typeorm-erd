# TypeORM ERD

Generating ERD for TypeORM data sources in Mermaid JS or PlantUML

- [TypeORM ERD](#typeorm-erd)
  - [Usage](#usage)
  - [Examples](#examples)
  - [Shoulders](#shoulders)

## Usage

Currently programmatic usage is the only supported usage method:

Create a new project with typeorm if you haven't got one

```bash
npx typeorm init --name basic --database postgres
```

Add the package as a dev dependency:

```bash
yarn add --dev typeorm-erd
```

Render the ERD from your local machine:

```ts
// src/data-source.ts
import { ERDBuilder } from "typeorm-erd";

const main = async () => {
  const erd = new ERDBuilder("mermaid", AppDataSource);
  await erd.initialize();
  const erdText = await erd.render();

  console.info(erdText);
};

main();
```

## Examples

Checkout the examples in ![./examples.md](./examples.md) and the source code for the examples in ![./examples.ts](./examples.ts)

## Shoulders

Based on [https://github.com/eugene-manuilov/typeorm-uml](https://github.com/eugene-manuilov/typeorm-uml) but with separation of concerns between EntityTreeConstruction and output format.
