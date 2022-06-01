import "reflect-metadata";
import { DataSource } from "typeorm";
import { Cart } from "./entities/Cart";
import { CartItem } from "./entities/CartItem";
import { Category } from "./entities/Category";
import { Order } from "./entities/Order";
import { OrderItem } from "./entities/OrderItem";
import { Product } from "./entities/Product";
import { ProductMeta } from "./entities/ProductMeta";
import { ProductReview } from "./entities/ProductReview";
import { Tag } from "./entities/Tag";
import { Transaction } from "./entities/Transaction";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [
    Cart,
    CartItem,
    Category,
    Order,
    OrderItem,
    Product,
    ProductMeta,
    ProductReview,
    Tag,
    Transaction,
    User,
  ],
  migrations: [],
  subscribers: [],
});
