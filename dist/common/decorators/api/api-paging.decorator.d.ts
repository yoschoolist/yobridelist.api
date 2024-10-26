import { Type } from "@nestjs/common";
export declare const ApiPaging: (model: Type, pagingModel: Type) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
