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
exports.ProductMeta = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let ProductMeta = class ProductMeta {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], ProductMeta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'productId' }),
    __metadata("design:type", String)
], ProductMeta.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'key', length: 50 }),
    __metadata("design:type", String)
], ProductMeta.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], ProductMeta.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.productMetas, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'productId', referencedColumnName: 'id' }]),
    __metadata("design:type", Product_1.Product)
], ProductMeta.prototype, "product", void 0);
ProductMeta = __decorate([
    (0, typeorm_1.Index)('uq_product_meta', ['productId', 'key'], { unique: true }),
    (0, typeorm_1.Index)('idx_meta_product', ['productId'], {}),
    (0, typeorm_1.Entity)('product_meta', { schema: 'shop' })
], ProductMeta);
exports.ProductMeta = ProductMeta;
