"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnonymousEmail = exports.ANONYMOUS_EMAIL_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.ANONYMOUS_EMAIL_KEY = "AnonymousEmail";
const AnonymousEmail = () => (0, common_1.SetMetadata)(exports.ANONYMOUS_EMAIL_KEY, true);
exports.AnonymousEmail = AnonymousEmail;
//# sourceMappingURL=anonymous-email.decorator.js.map