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
exports.Product = void 0;
const typeorm_1 = require("typeorm");
const CartItem_1 = require("./CartItem");
const OrderItem_1 = require("./OrderItem");
const User_1 = require("./User");
const Category_1 = require("./Category");
const ProductMeta_1 = require("./ProductMeta");
const ProductReview_1 = require("./ProductReview");
const Tag_1 = require("./Tag");
let Product = class Product {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'userId' }),
    __metadata("design:type", String)
], Product.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 75 }),
    __metadata("design:type", String)
], Product.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'metaTitle', nullable: true, length: 100 }),
    __metadata("design:type", Object)
], Product.prototype, "metaTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'slug', unique: true, length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)('tinytext', { name: 'summary', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "summary", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'type', default: () => "'0'" }),
    __metadata("design:type", Number)
], Product.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sku', length: 100 }),
    __metadata("design:type", String)
], Product.prototype, "sku", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'price', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'discount', precision: 12, default: () => "'0'" }),
    __metadata("design:type", Number)
], Product.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'quantity', default: () => "'0'" }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'shop', width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], Product.prototype, "shop", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'publishedAt', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'startsAt', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "startsAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'endsAt', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "endsAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Product.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartItem_1.CartItem, (cartItem) => cartItem.product),
    __metadata("design:type", Array)
], Product.prototype, "cartItems", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => OrderItem_1.OrderItem, (orderItem) => orderItem.product),
    __metadata("design:type", Array)
], Product.prototype, "orderItems", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.products, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], Product.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Category_1.Category, (category) => category.products),
    __metadata("design:type", Array)
], Product.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductMeta_1.ProductMeta, (productMeta) => productMeta.product),
    __metadata("design:type", Array)
], Product.prototype, "productMetas", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductReview_1.ProductReview, (productReview) => productReview.product),
    __metadata("design:type", Array)
], Product.prototype, "productReviews", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Tag_1.Tag, (tag) => tag.products),
    (0, typeorm_1.JoinTable)({
        name: 'product_tag',
        joinColumns: [{ name: 'productId', referencedColumnName: 'id' }],
        inverseJoinColumns: [{ name: 'tagId', referencedColumnName: 'id' }],
        schema: 'shop',
    }),
    __metadata("design:type", Array)
], Product.prototype, "tags", void 0);
Product = __decorate([
    (0, typeorm_1.Index)('uq_slug', ['slug'], { unique: true }),
    (0, typeorm_1.Index)('idx_product_user', ['userId'], {}),
    (0, typeorm_1.Entity)('product', { schema: 'shop' })
], Product);
exports.Product = Product;
