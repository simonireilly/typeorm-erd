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
exports.OrderItem = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const Product_1 = require("./Product");
let OrderItem = class OrderItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], OrderItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'productId' }),
    __metadata("design:type", String)
], OrderItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'orderId' }),
    __metadata("design:type", String)
], OrderItem.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sku', length: 100 }),
    __metadata("design:type", String)
], OrderItem.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'price', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'discount', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'quantity', default: () => "'0'" }),
    __metadata("design:type", Number)
], OrderItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], OrderItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], OrderItem.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.orderItems, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'orderId', referencedColumnName: 'id' }]),
    __metadata("design:type", Order_1.Order)
], OrderItem.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.orderItems, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'productId', referencedColumnName: 'id' }]),
    __metadata("design:type", Product_1.Product)
], OrderItem.prototype, "product", void 0);
OrderItem = __decorate([
    (0, typeorm_1.Index)('idx_order_item_product', ['productId'], {}),
    (0, typeorm_1.Index)('idx_order_item_order', ['orderId'], {}),
    (0, typeorm_1.Entity)('order_item', { schema: 'shop' })
], OrderItem);
exports.OrderItem = OrderItem;
