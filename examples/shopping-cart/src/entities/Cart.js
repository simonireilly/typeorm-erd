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
exports.Cart = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const CartItem_1 = require("./CartItem");
let Cart = class Cart {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Cart.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'userId', nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sessionId', length: 100 }),
    __metadata("design:type", String)
], Cart.prototype, "sessionId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'token', length: 100 }),
    __metadata("design:type", String)
], Cart.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'status', default: () => "'0'" }),
    __metadata("design:type", Number)
], Cart.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'firstName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'middleName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "middleName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lastName', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 15 }),
    __metadata("design:type", Object)
], Cart.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'line1', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "line1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'line2', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "line2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'province', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "province", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 50 }),
    __metadata("design:type", Object)
], Cart.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], Cart.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Cart.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.carts, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], Cart.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CartItem_1.CartItem, (cartItem) => cartItem.cart),
    __metadata("design:type", Array)
], Cart.prototype, "cartItems", void 0);
Cart = __decorate([
    (0, typeorm_1.Index)('idx_cart_user', ['userId'], {}),
    (0, typeorm_1.Entity)('cart', { schema: 'shop' })
], Cart);
exports.Cart = Cart;
