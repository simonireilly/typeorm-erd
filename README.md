# TypeORM ERD

[![NPM Version](https://img.shields.io/npm/v/typeorm-erd.svg?style=for-the-badge&labelColor=000000)](https://www.npmjs.com/package/typeorm-erd)

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

<!-- embedme ./example.mermaid -->

A complex ERD with join tables can be visualized.

```mermaid
erDiagram
  cart_item {
    bigint id PK
    bigint productId FK
    bigint cartId FK
    varchar sku
    float price
    float discount
    smallint quantity
    tinyint active
    datetime createdAt
    datetime updatedAt
    text content
  }
  category {
    bigint id PK
    bigint parentId FK
    varchar title
    varchar metaTitle
    varchar slug
    text content
  }
  product_meta {
    bigint id PK
    bigint productId FK
    varchar key
    text content
  }
  product_review {
    bigint id PK
    bigint productId FK
    bigint parentId FK
    varchar title
    smallint rating
    tinyint published
    datetime createdAt
    datetime publishedAt
    text content
  }
  tag {
    bigint id PK
    varchar title
    varchar metaTitle
    varchar slug
    text content
  }
  product {
    bigint id PK
    bigint userId FK
    varchar title
    varchar metaTitle
    varchar slug
    tinytext summary
    smallint type
    varchar sku
    float price
    float discount
    smallint quantity
    tinyint shop
    datetime createdAt
    datetime updatedAt
    datetime publishedAt
    datetime startsAt
    datetime endsAt
    text content
  }
  order_item {
    bigint id PK
    bigint productId FK
    bigint orderId FK
    varchar sku
    float price
    float discount
    smallint quantity
    datetime createdAt
    datetime updatedAt
    text content
  }
  transaction {
    bigint id PK
    bigint userId FK
    bigint orderId FK
    varchar code
    smallint type
    smallint mode
    smallint status
    datetime createdAt
    datetime updatedAt
    text content
  }
  order {
    bigint id PK
    bigint userId FK
    varchar sessionId
    varchar token
    smallint status
    float subTotal
    float itemDiscount
    float tax
    float shipping
    float total
    varchar promo
    float discount
    float grandTotal
    varchar firstName
    varchar middleName
    varchar lastName
    varchar mobile
    varchar email
    varchar line1
    varchar line2
    varchar city
    varchar province
    varchar country
    datetime createdAt
    datetime updatedAt
    text content
  }
  user {
    bigint id PK
    enum role
    varchar firstName
    varchar middleName
    varchar lastName
    varchar mobile
    varchar email
    varchar passwordHash
    tinyint admin
    tinyint vendor
    datetime registeredAt
    datetime lastLogin
    tinytext intro
    text profile
  }
  cart {
    bigint id PK
    bigint userId FK
    varchar sessionId
    varchar token
    smallint status
    varchar firstName
    varchar middleName
    varchar lastName
    varchar mobile
    varchar email
    varchar line1
    varchar line2
    varchar city
    varchar province
    varchar country
    datetime createdAt
    datetime updatedAt
    text content
  }
  product_category {
    bigint categoryId PK
    bigint productId PK
  }
  product_tag {
    bigint productId PK
    bigint tagId PK
  }
  cart_item }|--|| cart: cart
  cart_item }|--|| product: product
  category }|--|| category: parent
  category ||--|{ product_category: products
  product_meta }|--|| product: product
  product_review }|--|| product_review: parent
  product_review }|--|| product: product
  tag ||--|{ product_tag: products
  product }|--|| user: user
  product ||--|{ product_category: categories
  product ||--|{ product_tag: tags
  order_item }|--|| order: order
  order_item }|--|| product: product
  transaction }|--|| order: order
  transaction }|--|| user: user
  order }|--|| user: user
  cart }|--|| user: user
```

Checkout the examples in [./examples.md](./examples.md) and the source code for the examples in [./examples.ts](./examples.ts)

## Shoulders

Based on [https://github.com/eugene-manuilov/typeorm-uml](https://github.com/eugene-manuilov/typeorm-uml) but with separation of concerns between EntityTreeConstruction and output format.
