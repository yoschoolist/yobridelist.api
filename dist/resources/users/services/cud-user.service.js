"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CudUserServiceImpl = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../database/prisma.service");
const upload_interface_1 = require("../../../upload/interfaces/upload.interface");
const string_service_1 = require("../../../common/utils/string.service");
const user_not_found_exception_1 = require("../exceptions/user-not-found.exception");
const prisma_error_enum_1 = require("../../../database/enums/prisma-error.enum");
const folder_enum_1 = require("../../../upload/enums/folder.enum");
let CudUserServiceImpl = class CudUserServiceImpl {
    constructor(prisma, uploadService, stringService) {
        this.prisma = prisma;
        this.uploadService = uploadService;
        this.stringService = stringService;
    }
    async create(data) {
        data.alias = this.stringService.slug(data.name);
        return this.prisma.user.create({ data });
    }
    async update(params) {
        const { data, where, image } = params;
        if (data.name)
            data.alias = this.stringService.slug(data.name);
        const oldUser = image &&
            (await this.prisma.user
                .findUniqueOrThrow({
                where,
                select: { imageId: true },
            })
                .catch(() => {
                throw new user_not_found_exception_1.UserNotFoundException();
            }));
        const uploadResponse = image &&
            (await this.uploadService
                .uploadFile(image, {
                folder: folder_enum_1.UploadFolder.USER_IMAGE,
            })
                .catch(() => undefined));
        data.imageId = uploadResponse?.fileId;
        data.imageUrl = uploadResponse?.url;
        const updatedUser = await this.prisma.user
            .update({
            data,
            where,
        })
            .catch((error) => {
            if (uploadResponse)
                this.uploadService.deleteFile(uploadResponse.fileId);
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND ||
                error?.code === prisma_error_enum_1.PrismaError.QUERY_INTERPRETATION_ERROR) {
                throw new user_not_found_exception_1.UserNotFoundException();
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        });
        if (oldUser?.imageId && updatedUser.imageId !== oldUser.imageId)
            this.uploadService.deleteFile(oldUser.imageId);
        return updatedUser;
    }
    async delete(id) {
        const user = await this.prisma.user
            .delete({ where: { id } })
            .catch((error) => {
            if (error?.code === prisma_error_enum_1.PrismaError.ENTITY_NOT_FOUND) {
                throw new user_not_found_exception_1.UserNotFoundException();
            }
            else {
                throw new common_1.InternalServerErrorException();
            }
        });
        if (user.imageId)
            this.uploadService.deleteFile(user.imageId);
        return user;
    }
};
exports.CudUserServiceImpl = CudUserServiceImpl;
exports.CudUserServiceImpl = CudUserServiceImpl = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(upload_interface_1.UPLOAD_SERVICE)),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService, Object, string_service_1.StringService])
], CudUserServiceImpl);
//# sourceMappingURL=cud-user.service.js.map