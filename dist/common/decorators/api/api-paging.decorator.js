"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiPaging = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const paged_response_dto_1 = require("../../dtos/paged-response.dto");
const ApiPaging = (model, pagingModel) => {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiExtraModels)(paged_response_dto_1.PagedResponseDto), (0, swagger_1.ApiQuery)({ type: () => pagingModel }), (0, swagger_1.ApiOkResponse)({
        schema: {
            allOf: [
                {
                    $ref: (0, swagger_1.getSchemaPath)(paged_response_dto_1.PagedResponseDto),
                },
                {
                    properties: {
                        results: {
                            type: "array",
                            items: { $ref: (0, swagger_1.getSchemaPath)(model) },
                        },
                    },
                },
            ],
        },
    }));
};
exports.ApiPaging = ApiPaging;
//# sourceMappingURL=api-paging.decorator.js.map