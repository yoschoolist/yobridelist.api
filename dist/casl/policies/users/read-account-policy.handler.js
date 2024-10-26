"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAccountHandler = void 0;
const casl_enum_1 = require("../../enums/casl.enum");
class ReadAccountHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Read, "Account");
    }
}
exports.ReadAccountHandler = ReadAccountHandler;
//# sourceMappingURL=read-account-policy.handler.js.map