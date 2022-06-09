# TypeORM ERD

> Generating ERD for TypeORM data sources

- [TypeORM ERD](#typeorm-erd)
  - [Usage](#usage)
    - [Output](#output)
  - [TODO](#todo)
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
import { MermaidErd } from "typeorm-erd";

const main = async () => {
  const erd = new MermaidErd(AppDataSource);
  await erd.initialize();
  const erdText = await erd.render();

  console.info(erdText);
};

main();
```

### Output

```mermaid
erDiagram
  tag {
    bigint id PK
  }
  product {
    bigint id PK
  }
  product_tag {
    bigint productId PK
    bigint tagId PK
  }
  tag ||--|{ product_tag: products
  product ||--|{ product_tag: tags
```

## TODO

- [ ] When relation is nullable use `o{` relation to show zero or more

## Shoulders

Based on [https://github.com/eugene-manuilov/typeorm-uml](https://github.com/eugene-manuilov/typeorm-uml) but with separation of concerns between EntityTreeConstruction and output format.
