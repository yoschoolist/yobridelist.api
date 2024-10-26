"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseAuthService = void 0;
class BaseAuthService {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    async createAccessToken(user) {
        return this.jwtService.signAsync({
            sub: user.id,
            email: user.email,
            role: user.role,
            emailConfirmed: user.emailConfirmed,
            locked: user.locked,
        });
    }
}
exports.BaseAuthService = BaseAuthService;
//# sourceMappingURL=base-auth.service.js.map