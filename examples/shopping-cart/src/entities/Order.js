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
exports.Order = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const OrderItem_1 = require("./OrderItem");
const Transaction_1 = require("./Transaction");
let Order = class Order {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Order.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'userId', nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sessionId', length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'token', length: 100 }),
    __metadata("design:type", String)
], Order.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'status', default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'subTotal', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "subTotal", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        name: 'itemDiscount',
        precision: 12,
        default: () => "'0'",
    }),
    __metadata("design:type", Number)
], Order.prototype, "itemDiscount", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'tax', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "tax", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'shipping', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "shipping", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'total', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'promo', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "promo", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'discount', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'grandTotal', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Order.prototype, "grandTotal", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'firstName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'middleName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lastName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 15 }),
    __metadata("design:type", Object)
], Order.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'line1', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "line1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'line2', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "line2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'province', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Order.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], Order.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Order.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.orders, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], Order.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderItem_1.OrderItem, (orderItem) => orderItem.order),
    __metadata("design:type", Array)
], Order.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Transaction_1.Transaction, (transaction) => transaction.order),
    __metadata("design:type", Array)
], Order.prototype, "transactions", void 0);
Order = __decorate([
    (0, typeorm_1.Index)('idx_order_user', ['userId'], {}),
    (0, typeorm_1.Entity)('order', { schema: 'shop' })
], Order);
exports.Order = Order;
