"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SectionsModule = void 0;
const common_1 = require("@nestjs/common");
const sections_service_1 = require("./sections.service");
const blogs_module_1 = require("../resources/blogs/blogs.module");
let SectionsModule = class SectionsModule {
};
exports.SectionsModule = SectionsModule;
exports.SectionsModule = SectionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            blogs_module_1.BlogsModule,
        ],
        providers: [sections_service_1.SectionsService],
        exports: [sections_service_1.SectionsService],
    })
], SectionsModule);
//# sourceMappingURL=sections.module.js.map