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
exports.CartItem = void 0;
const typeorm_1 = require("typeorm");
const Cart_1 = require("./Cart");
const Product_1 = require("./Product");
let CartItem = class CartItem {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], CartItem.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'productId' }),
    __metadata("design:type", String)
], CartItem.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'cartId' }),
    __metadata("design:type", String)
], CartItem.prototype, "cartId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sku', length: 100 }),
    __metadata("design:type", String)
], CartItem.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'price', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], CartItem.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'discount', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], CartItem.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'quantity', default: () => "'0'" }),
    __metadata("design:type", Number)
], CartItem.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'active', width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], CartItem.prototype, "active", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], CartItem.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], CartItem.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], CartItem.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cart_1.Cart, (cart) => cart.cartItems, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'cartId', referencedColumnName: 'id' }]),
    __metadata("design:type", Cart_1.Cart)
], CartItem.prototype, "cart", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.cartItems, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'productId', referencedColumnName: 'id' }]),
    __metadata("design:type", Product_1.Product)
], CartItem.prototype, "product", void 0);
CartItem = __decorate([
    (0, typeorm_1.Index)('idx_cart_item_product', ['productId'], {}),
    (0, typeorm_1.Index)('idx_cart_item_cart', ['cartId'], {}),
    (0, typeorm_1.Entity)('cart_item', { schema: 'shop' })
], CartItem);
exports.CartItem = CartItem;
