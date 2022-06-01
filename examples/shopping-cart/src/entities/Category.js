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
var Category_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Category = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let Category = Category_1 = class Category {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'parentId', nullable: true }),
    __metadata("design:type", Object)
], Category.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 75 }),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'metaTitle', nullable: true, length: 100 }),
    __metadata("design:type", Object)
], Category.prototype, "metaTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'slug', length: 100 }),
    __metadata("design:type", String)
], Category.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Category.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Category_1, (category) => category.categories, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'parentId', referencedColumnName: 'id' }]),
    __metadata("design:type", Category)
], Category.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Category_1, (category) => category.parent),
    __metadata("design:type", Array)
], Category.prototype, "categories", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_1.Product, (product) => product.categories),
    (0, typeorm_1.JoinTable)({
        name: 'product_category',
        joinColumns: [{ name: 'categoryId', referencedColumnName: 'id' }],
        inverseJoinColumns: [{ name: 'productId', referencedColumnName: 'id' }],
        schema: 'shop',
    }),
    __metadata("design:type", Array)
], Category.prototype, "products", void 0);
Category = Category_1 = __decorate([
    (0, typeorm_1.Index)('idx_category_parent', ['parentId'], {}),
    (0, typeorm_1.Entity)('category', { schema: 'shop' })
], Category);
exports.Category = Category;
