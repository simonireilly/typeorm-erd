"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Comments_1 = require("./entities/Comments");
const User_1 = require("./entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [User_1.User, Comments_1.Comment],
    migrations: [],
    subscribers: [],
});
