"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManageArtistHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ManageArtistHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Manage, "Artist");
    }
}
exports.ManageArtistHandler = ManageArtistHandler;
//# sourceMappingURL=manage-artist-policy.handler.js.map