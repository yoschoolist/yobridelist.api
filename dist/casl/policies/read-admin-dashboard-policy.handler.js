"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadAdminDashboardHandler = void 0;
const casl_enum_1 = require("../enums/casl.enum");
class ReadAdminDashboardHandler {
    handle(ability) {
        return ability.can(casl_enum_1.Action.Read, "Dashboard");
    }
}
exports.ReadAdminDashboardHandler = ReadAdminDashboardHandler;
//# sourceMappingURL=read-admin-dashboard-policy.handler.js.map