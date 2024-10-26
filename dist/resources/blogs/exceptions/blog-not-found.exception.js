"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogNotFoundException = void 0;
const common_1 = require("@nestjs/common");
class BlogNotFoundException extends common_1.NotFoundException {
    constructor() {
        super(`Blog was not found.`);
    }
}
exports.BlogNotFoundException = BlogNotFoundException;
//# sourceMappingURL=blog-not-found.exception.js.map