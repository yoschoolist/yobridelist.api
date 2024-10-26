"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageBlogTagHandler = exports.ManageBlogCategoryHandler = exports.ManageBlogHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ManageBlogHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Blog");
    }
}
exports.ManageBlogHandler = ManageBlogHandler;
class ManageBlogCategoryHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Blog Category");
    }
}
exports.ManageBlogCategoryHandler = ManageBlogCategoryHandler;
class ManageBlogTagHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Blog Tag");
    }
}
exports.ManageBlogTagHandler = ManageBlogTagHandler;
//# sourceMappingURL=manage-blog-policy.handler.js.map