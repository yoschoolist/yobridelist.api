"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBodyId = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ApiBodyId = (idName) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiBody)({
        schema: {
            type: "object",
            properties: {
                [idName]: {
                    description: `Id of entity`,
                },
            },
        },
    }));
};
exports.ApiBodyId = ApiBodyId;
//# sourceMappingURL=api-body-id.decorator.js.map