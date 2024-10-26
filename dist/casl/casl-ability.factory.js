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
const prisma_1 = require("@casl/prisma");
const client_1 = require("@prisma/client");
const casl_enum_1 = require("./enums/casl.enum");
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        const { can, cannot, build } = new ability_1.AbilityBuilder(prisma_1.createPrismaAbility);
        if (user?.role === client_1.Role.ADMIN) {
            can(casl_enum_1.Action.Manage, "all");
            can(casl_enum_1.Action.Read, "Dashboard");
            cannot(casl_enum_1.Action.Update, "Account", { role: client_1.Role.ADMIN });
            cannot(casl_enum_1.Action.Delete, "Account", { role: client_1.Role.ADMIN });
        }
        else if (user?.role === client_1.Role.MEMBER) {
            can(casl_enum_1.Action.Read, "Playlist", {
                OR: [{ status: client_1.PlaylistStatus.PUBLIC }, { userId: user.sub }],
            });
            can(casl_enum_1.Action.Update, "Playlist", { userId: user.sub });
            can(casl_enum_1.Action.Delete, "Playlist", { userId: user.sub });
        }
        else if (!user) {
            can(casl_enum_1.Action.Read, "Playlist", {
                status: client_1.PlaylistStatus.PUBLIC,
            });
        }
        return build();
    }
};
exports.CaslAbilityFactory = CaslAbilityFactory;
exports.CaslAbilityFactory = CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], CaslAbilityFactory);
//# sourceMappingURL=casl-ability.factory.js.map