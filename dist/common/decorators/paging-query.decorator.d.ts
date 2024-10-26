import { ClassConstructor } from "class-transformer";
import { QueryParamDto } from "../dtos/query-param.dto";
export declare const PagingQuery: (...dataOrPipes: (import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>> | ClassConstructor<QueryParamDto>)[]) => ParameterDecorator;
