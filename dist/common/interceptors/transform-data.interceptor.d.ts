import { ExecutionContext, NestInterceptor, CallHandler } from "@nestjs/common";
import { ClassConstructor } from "class-transformer";
export declare class TransformDataInterceptor implements NestInterceptor {
    private readonly classToUse;
    constructor(classToUse: ClassConstructor<unknown>);
    intercept(context: ExecutionContext, next: CallHandler): import("rxjs").Observable<unknown>;
}
