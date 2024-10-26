"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageGenreHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ManageGenreHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Genre");
    }
}
exports.ManageGenreHandler = ManageGenreHandler;
//# sourceMappingURL=manage-genre-policy.handler.js.map