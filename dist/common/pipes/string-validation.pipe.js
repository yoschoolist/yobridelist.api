"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValidationPipe = void 0;
const common_1 = require("@nestjs/common");
let StringValidationPipe = class StringValidationPipe {
    transform(value, metadata) {
        if (typeof value !== "string") {
            throw new common_1.BadRequestException(`${metadata.data} must be a string`);
        }
        return value;
    }
};
exports.StringValidationPipe = StringValidationPipe;
exports.StringValidationPipe = StringValidationPipe = __decorate([
    (0, common_1.Injectable)()
], StringValidationPipe);
//# sourceMappingURL=string-validation.pipe.js.map