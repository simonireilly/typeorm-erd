# TypeORM ERD

> Generating ERD for TypeORM data sources

- [TypeORM ERD](#typeorm-erd)
  - [Usage](#usage)
    - [Output](#output)
  - [TODO](#todo)
  - [Shoulders](#shoulders)

## Usage

Currently programmatic usage is the only supported usage method:

```ts
import { MermaidErd } from "./src/adapters/mermaid";
import { AppDataSource as BasicDataSource } from "./examples/join-tables/src/data-source";

const basic = new MermaidErd(BasicDataSource);
await basic.initialize();
const basicMermaidErd = basic.render();
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
- [ ] Publish to NPM to allow usage in other modules

## Shoulders

Based on [https://github.com/eugene-manuilov/typeorm-uml](https://github.com/eugene-manuilov/typeorm-uml) but with separation of concerns between EntityTreeConstruction and output format.
