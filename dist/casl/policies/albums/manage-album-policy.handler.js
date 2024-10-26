"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageAlbumHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ManageAlbumHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Album");
    }
}
exports.ManageAlbumHandler = ManageAlbumHandler;
//# sourceMappingURL=manage-album-policy.handler.js.map