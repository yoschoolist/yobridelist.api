"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadModule = void 0;
const common_1 = require("@nestjs/common");
const cloudinary_provider_1 = require("./providers/cloudinary.provider");
const upload_interface_1 = require("./interfaces/upload.interface");
const cloudinary_service_1 = require("./cloudinary.service");
let UploadModule = class UploadModule {
};
exports.UploadModule = UploadModule;
exports.UploadModule = UploadModule = __decorate([
    (0, common_1.Module)({
        providers: [
            cloudinary_provider_1.CloudinaryProvider,
            {
                provide: upload_interface_1.UPLOAD_SERVICE,
                useClass: cloudinary_service_1.CloudinaryService,
            },
        ],
        exports: [upload_interface_1.UPLOAD_SERVICE, cloudinary_provider_1.CloudinaryProvider],
    })
], UploadModule);
//# sourceMappingURL=upload.module.js.map