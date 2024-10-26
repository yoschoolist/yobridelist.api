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
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const anonymous_email_decorator_1 = require("../decorators/anonymous-email.decorator");
let AuthGuard = class AuthGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.user)
            throw new common_1.UnauthorizedException("Invalid access token.");
        if (request.user.locked) {
            throw new common_1.ForbiddenException("You are locked out.");
        }
        const isAnonymousEmail = this.reflector.getAllAndOverride(anonymous_email_decorator_1.ANONYMOUS_EMAIL_KEY, [context.getHandler(), context.getClass()]);
        if (!isAnonymousEmail && !request.user.emailConfirmed) {
            throw new common_1.ForbiddenException("Email must be confirmed.");
        }
        return true;
    }
};
exports.AuthGuard = AuthGuard;
exports.AuthGuard = AuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], AuthGuard);
//# sourceMappingURL=auth.guard.js.map