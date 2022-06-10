## Mermaid

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
  
## Plantuml

```plantuml
@startuml
skinparam linetype ortho
entity "cart_item" {
    id : BIGINT : <<PK>>
    --
    productId : BIGINT : <<FK>>
    --
    cartId : BIGINT : <<FK>>
    --
    sku : VARCHAR(100)
    --
    price : FLOAT
    --
    discount : FLOAT
    --
    quantity : SMALLINT
    --
    active : TINYINT
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    content : TEXT
}
entity "category" {
    id : BIGINT : <<PK>>
    --
    parentId : BIGINT : <<FK>>
    --
    title : VARCHAR(75)
    --
    metaTitle : VARCHAR(100)
    --
    slug : VARCHAR(100)
    --
    content : TEXT
}
entity "product_meta" {
    id : BIGINT : <<PK>>
    --
    productId : BIGINT : <<FK>>
    --
    key : VARCHAR(50)
    --
    content : TEXT
}
entity "product_review" {
    id : BIGINT : <<PK>>
    --
    productId : BIGINT : <<FK>>
    --
    parentId : BIGINT : <<FK>>
    --
    title : VARCHAR(100)
    --
    rating : SMALLINT
    --
    published : TINYINT
    --
    createdAt : DATETIME
    --
    publishedAt : DATETIME
    --
    content : TEXT
}
entity "tag" {
    id : BIGINT : <<PK>>
    --
    title : VARCHAR(75)
    --
    metaTitle : VARCHAR(100)
    --
    slug : VARCHAR(100)
    --
    content : TEXT
}
entity "product" {
    id : BIGINT : <<PK>>
    --
    userId : BIGINT : <<FK>>
    --
    title : VARCHAR(75)
    --
    metaTitle : VARCHAR(100)
    --
    slug : VARCHAR(100)
    --
    summary : TINYTEXT
    --
    type : SMALLINT
    --
    sku : VARCHAR(100)
    --
    price : FLOAT
    --
    discount : FLOAT
    --
    quantity : SMALLINT
    --
    shop : TINYINT
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    publishedAt : DATETIME
    --
    startsAt : DATETIME
    --
    endsAt : DATETIME
    --
    content : TEXT
}
entity "order_item" {
    id : BIGINT : <<PK>>
    --
    productId : BIGINT : <<FK>>
    --
    orderId : BIGINT : <<FK>>
    --
    sku : VARCHAR(100)
    --
    price : FLOAT
    --
    discount : FLOAT
    --
    quantity : SMALLINT
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    content : TEXT
}
entity "transaction" {
    id : BIGINT : <<PK>>
    --
    userId : BIGINT : <<FK>>
    --
    orderId : BIGINT : <<FK>>
    --
    code : VARCHAR(100)
    --
    type : SMALLINT
    --
    mode : SMALLINT
    --
    status : SMALLINT
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    content : TEXT
}
entity "order" {
    id : BIGINT : <<PK>>
    --
    userId : BIGINT : <<FK>>
    --
    sessionId : VARCHAR(100)
    --
    token : VARCHAR(100)
    --
    status : SMALLINT
    --
    subTotal : FLOAT
    --
    itemDiscount : FLOAT
    --
    tax : FLOAT
    --
    shipping : FLOAT
    --
    total : FLOAT
    --
    promo : VARCHAR(50)
    --
    discount : FLOAT
    --
    grandTotal : FLOAT
    --
    firstName : VARCHAR(50)
    --
    middleName : VARCHAR(50)
    --
    lastName : VARCHAR(50)
    --
    mobile : VARCHAR(15)
    --
    email : VARCHAR(50)
    --
    line1 : VARCHAR(50)
    --
    line2 : VARCHAR(50)
    --
    city : VARCHAR(50)
    --
    province : VARCHAR(50)
    --
    country : VARCHAR(50)
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    content : TEXT
}
entity "user" {
    id : BIGINT : <<PK>>
    --
    role : ENUM
    --
    firstName : VARCHAR(50)
    --
    middleName : VARCHAR(50)
    --
    lastName : VARCHAR(50)
    --
    mobile : VARCHAR(15)
    --
    email : VARCHAR(50)
    --
    passwordHash : VARCHAR(32)
    --
    admin : TINYINT
    --
    vendor : TINYINT
    --
    registeredAt : DATETIME
    --
    lastLogin : DATETIME
    --
    intro : TINYTEXT
    --
    profile : TEXT
}
entity "cart" {
    id : BIGINT : <<PK>>
    --
    userId : BIGINT : <<FK>>
    --
    sessionId : VARCHAR(100)
    --
    token : VARCHAR(100)
    --
    status : SMALLINT
    --
    firstName : VARCHAR(50)
    --
    middleName : VARCHAR(50)
    --
    lastName : VARCHAR(50)
    --
    mobile : VARCHAR(15)
    --
    email : VARCHAR(50)
    --
    line1 : VARCHAR(50)
    --
    line2 : VARCHAR(50)
    --
    city : VARCHAR(50)
    --
    province : VARCHAR(50)
    --
    country : VARCHAR(50)
    --
    createdAt : DATETIME
    --
    updatedAt : DATETIME
    --
    content : TEXT
}
entity "product_category" {
    categoryId : BIGINT : <<PK>>
    --
    productId : BIGINT : <<PK>>
}
entity "product_tag" {
    productId : BIGINT : <<PK>>
    --
    tagId : BIGINT : <<PK>>
}
cart_item }|--|| cart
cart_item }|--|| product
category }|--|| category
category ||--|{ product_category
product_meta }|--|| product
product_review }|--|| product_review
product_review }|--|| product
tag ||--|{ product_tag
product }|--|| user
product ||--|{ product_category
product ||--|{ product_tag
order_item }|--|| order
order_item }|--|| product
transaction }|--|| order
transaction }|--|| user
order }|--|| user
cart }|--|| user
@enduml
```

