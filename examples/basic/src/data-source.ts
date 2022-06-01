import "reflect-metadata";
import { DataSource } from "typeorm";
import { Comment } from "./entities/Comments";
import { User } from "./entities/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Comment],
  migrations: [],
  subscribers: [],
});
