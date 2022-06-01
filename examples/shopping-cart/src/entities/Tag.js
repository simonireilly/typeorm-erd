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
exports.Tag = void 0;
const typeorm_1 = require("typeorm");
const Product_1 = require("./Product");
let Tag = class Tag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Tag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 75 }),
    __metadata("design:type", String)
], Tag.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'metaTitle', nullable: true, length: 100 }),
    __metadata("design:type", Object)
], Tag.prototype, "metaTitle", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'slug', length: 100 }),
    __metadata("design:type", String)
], Tag.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Tag.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Product_1.Product, (product) => product.tags),
    __metadata("design:type", Array)
], Tag.prototype, "products", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)('tag', { schema: 'shop' })
], Tag);
exports.Tag = Tag;
