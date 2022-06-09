import "reflect-metadata";
import { DataSource } from "typeorm";
import { Product } from "./entities/Product";
import { Tag } from "./entities/Tag";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [Product, Tag],
  migrations: [],
  subscribers: [],
});
