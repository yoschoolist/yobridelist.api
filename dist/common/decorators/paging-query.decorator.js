"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagingQuery = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
exports.PagingQuery = (0, common_1.createParamDecorator)(async (data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const pagingQuery = (0, class_transformer_1.plainToInstance)(data, request.query, {
        excludeExtraneousValues: true,
        exposeUnsetFields: false,
    });
    const errors = await (0, class_validator_1.validate)(pagingQuery);
    if (errors.length > 0) {
        throw new common_1.BadRequestException(errors.map((e) => Object.values(e.constraints)[0]));
    }
    pagingQuery.skip = pagingQuery.skip >= 0 ? pagingQuery.skip : 0;
    pagingQuery.take = pagingQuery.take > 0 ? pagingQuery.take : 1;
    return pagingQuery;
});
//# sourceMappingURL=paging-query.decorator.js.map