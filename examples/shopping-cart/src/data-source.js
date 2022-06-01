"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Cart_1 = require("./entities/Cart");
const CartItem_1 = require("./entities/CartItem");
const Category_1 = require("./entities/Category");
const Order_1 = require("./entities/Order");
const OrderItem_1 = require("./entities/OrderItem");
const Product_1 = require("./entities/Product");
const ProductMeta_1 = require("./entities/ProductMeta");
const ProductReview_1 = require("./entities/ProductReview");
const Tag_1 = require("./entities/Tag");
const Transaction_1 = require("./entities/Transaction");
const User_1 = require("./entities/User");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "sqlite",
    database: "test",
    synchronize: true,
    logging: false,
    entities: [
        Cart_1.Cart,
        CartItem_1.CartItem,
        Category_1.Category,
        Order_1.Order,
        OrderItem_1.OrderItem,
        Product_1.Product,
        ProductMeta_1.ProductMeta,
        ProductReview_1.ProductReview,
        Tag_1.Tag,
        Transaction_1.Transaction,
        User_1.User,
    ],
    migrations: [],
    subscribers: [],
});
