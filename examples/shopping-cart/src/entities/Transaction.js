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
exports.Transaction = void 0;
const typeorm_1 = require("typeorm");
const Order_1 = require("./Order");
const User_1 = require("./User");
let Transaction = class Transaction {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", String)
], Transaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'userId' }),
    __metadata("design:type", String)
], Transaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'orderId' }),
    __metadata("design:type", String)
], Transaction.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 100 }),
    __metadata("design:type", String)
], Transaction.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'type', default: () => "'0'" }),
    __metadata("design:type", Number)
], Transaction.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'mode', default: () => "'0'" }),
    __metadata("design:type", Number)
], Transaction.prototype, "mode", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'status', default: () => "'0'" }),
    __metadata("design:type", Number)
], Transaction.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'createdAt' }),
    __metadata("design:type", Date)
], Transaction.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('datetime', { name: 'updatedAt', nullable: true }),
    __metadata("design:type", Object)
], Transaction.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'content', nullable: true }),
    __metadata("design:type", Object)
], Transaction.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Order_1.Order, (order) => order.transactions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'orderId', referencedColumnName: 'id' }]),
    __metadata("design:type", Order_1.Order)
], Transaction.prototype, "order", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.transactions, {
        onDelete: 'RESTRICT',
        onUpdate: 'RESTRICT',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'userId', referencedColumnName: 'id' }]),
    __metadata("design:type", User_1.User)
], Transaction.prototype, "user", void 0);
Transaction = __decorate([
    (0, typeorm_1.Index)('idx_transaction_user', ['userId'], {}),
    (0, typeorm_1.Index)('idx_transaction_order', ['orderId'], {}),
    (0, typeorm_1.Entity)('transaction', { schema: 'shop' })
], Transaction);
exports.Transaction = Transaction;
