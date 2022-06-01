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
var ProductReview_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReview = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let ProductReview = ProductReview_1 = class ProductReview {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], ProductReview.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'productId' }),
    __metadata("design:type", String)
], ProductReview.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'parentId', nullable: true }),
    __metadata("design:type", Object)
], ProductReview.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 100 }),
    __metadata("design:type", String)
], ProductReview.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'rating', default: () => "'0'" }),
    __metadata("design:type", Number)
], ProductReview.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'published', width: 1, default: () => "'0'" }),
    __metadata("design:type", Boolean)
], ProductReview.prototype, "published", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], ProductReview.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'publishedAt', nullable: true }),
    __metadata("design:type", Object)
], ProductReview.prototype, "publishedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], ProductReview.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ProductReview_1, (productReview) => productReview.productReviews, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' }),
    (0, typeorm_1.JoinColumn)([{ name: 'parentId', referencedColumnName: 'id' }]),
    __metadata("design:type", ProductReview)
], ProductReview.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ProductReview_1, (productReview) => productReview.parent),
    __metadata("design:type", Array)
], ProductReview.prototype, "productReviews", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.Product, (product) => product.productReviews, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'productId', referencedColumnName: 'id' }]),
    __metadata("design:type", Product_1.Product)
], ProductReview.prototype, "product", void 0);
ProductReview = ProductReview_1 = __decorate([
    (0, typeorm_1.Index)('idx_review_product', ['productId'], {}),
    (0, typeorm_1.Index)('idx_review_parent', ['parentId'], {}),
    (0, typeorm_1.Entity)('product_review', { schema: 'shop' })
], ProductReview);
exports.ProductReview = ProductReview;
