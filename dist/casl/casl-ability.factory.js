"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
const common_1 = require("@nestjs/common");
const ability_1 = require("@casl/ability");
const client_1 = require("@prisma/client");
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.createMongoAbility);
        if (user.role === client_1.UserRole.superadmin) {
            can('manage', 'all');
        }
        else if (user.role === client_1.UserRole.admin) {
            can('manage', 'all');
            cannot('delete', client_1.User, { role: client_1.UserRole.superadmin });
            cannot('update', client_1.User, { role: client_1.UserRole.superadmin });
        }
        else if (user.role === client_1.UserRole.manager) {
            can('read', 'all');
            can('create', [client_1.Vendor, client_1.Service, client_1.BlogPost]);
            can('update', [client_1.Vendor, client_1.Service], { 'vendor.userId': user.id });
            can('update', client_1.BlogPost, { authorId: user.id });
            can('delete', client_1.BlogPost, { authorId: user.id });
            can('manage', [client_1.Booking, client_1.Review]);
        }
        else {
            can('read', [client_1.Vendor, client_1.Service, client_1.BlogPost, client_1.ForumTopic]);
            can('create', [client_1.Booking, client_1.Review, client_1.ForumTopic, client_1.ForumPost]);
            can('update', client_1.Booking, { userId: user.id });
            can('update', client_1.Review, { userId: user.id });
            can('update', client_1.ForumPost, { userId: user.id });
            can('delete', client_1.ForumPost, { userId: user.id });
            can('read', client_1.User, { id: user.id });
            can('update', client_1.User, { id: user.id });
        }
        return build({
            detectSubjectType: (item) => item.constructor,
        });
    }
};
exports.CaslAbilityFactory = CaslAbilityFactory;
exports.CaslAbilityFactory = CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], CaslAbilityFactory);
//# sourceMappingURL=casl-ability.factory.js.map