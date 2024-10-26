"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageSongHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ManageSongHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Song");
    }
}
exports.ManageSongHandler = ManageSongHandler;
//# sourceMappingURL=manage-song-policy.handler.js.map