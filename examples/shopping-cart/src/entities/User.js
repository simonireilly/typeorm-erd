"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserRole = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
const Transaction_1 = require("./Transaction");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["EDITOR"] = "editor";
    UserRole["GHOST"] = "ghost";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'enum',
        enum: UserRole,
        default: UserRole.GHOST,
    }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'firstName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'middleName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], User.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lastName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'mobile',
        nullable: true,
        unique: true,
        length: 15,
    }),
    __metadata("design:type", Object)
], User.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'email',
        nullable: true,
        unique: true,
        length: 50,
    }),
    __metadata("design:type", Object)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'passwordHash', length: 32 }),
    __metadata("design:type", String)
], User.prototype, "passwordHash", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'admin', width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], User.prototype, "admin", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'vendor', width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], User.prototype, "vendor", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'registeredAt' }),
    __metadata("design:type", Date)
], User.prototype, "registeredAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'lastLogin', nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "lastLogin", void 0);
__decorate([
    (0, typeorm_1.Column)('tinytext', { name: 'intro', nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "intro", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'profile', nullable: true }),
    __metadata("design:type", Object)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Cart_1.Cart, (cart) => cart.user),
    __metadata("design:type", Array)
], User.prototype, "carts", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.user),
    __metadata("design:type", Array)
], User.prototype, "orders", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Product_1.Product, (product) => product.user),
    __metadata("design:type", Array)
], User.prototype, "products", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transaction_1.Transaction, (transaction) => transaction.user),
    __metadata("design:type", Array)
], User.prototype, "transactions", void 0);
User = __decorate([
    (0, typeorm_1.Index)('uq_mobile', ['mobile'], { unique: true }),
    (0, typeorm_1.Index)('uq_email', ['email'], { unique: true }),
    (0, typeorm_1.Entity)('user', { schema: 'shop' })
], User);
exports.User = User;
