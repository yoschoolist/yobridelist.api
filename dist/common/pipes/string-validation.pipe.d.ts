import { PipeTransform, ArgumentMetadata } from "@nestjs/common";
export declare class StringValidationPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): string;
}
