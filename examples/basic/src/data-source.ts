import "reflect-metadata";
import { DataSource } from "typeorm";
import { Comment } from "./entity/Comments";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "sqlite",
  database: "test",
  synchronize: true,
  logging: false,
  entities: [User, Comment],
  migrations: [],
  subscribers: [],
});
