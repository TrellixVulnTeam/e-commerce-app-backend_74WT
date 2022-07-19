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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartEntity = void 0;
const user_entity_1 = require("src/auth/user.entity");
const product_entity_1 = require("../product/product.entity");
const typeorm_1 = require("typeorm");
let CartEntity = class CartEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", Number)
], CartEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartEntity.prototype, "total", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CartEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => product_entity_1.ProductEntity, (order) => order.id),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", product_entity_1.ProductEntity)
], CartEntity.prototype, "item", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)((type) => user_entity_1.Users, (user) => user.username),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof user_entity_1.Users !== "undefined" && user_entity_1.Users) === "function" ? _a : Object)
], CartEntity.prototype, "user", void 0);
CartEntity = __decorate([
    (0, typeorm_1.Entity)()
], CartEntity);
exports.CartEntity = CartEntity;
//# sourceMappingURL=cart.entity.js.map