"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaError = void 0;
var PrismaError;
(function (PrismaError) {
    PrismaError["UNIQUE_CONSTRAINT_FAILED"] = "P2002";
    PrismaError["FOREIGN_KEY_CONSTRAINT_FAILED"] = "P2003";
    PrismaError["ENTITY_NOT_FOUND"] = "P2025";
    PrismaError["QUERY_INTERPRETATION_ERROR"] = "P2016";
})(PrismaError || (exports.PrismaError = PrismaError = {}));
//# sourceMappingURL=prisma-error.enum.js.map