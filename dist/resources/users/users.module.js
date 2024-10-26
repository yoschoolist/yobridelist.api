"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const get_user_by_id_middleware_1 = require("./middlewares/get-user-by-id.middleware");
const prisma_module_1 = require("../../database/prisma.module");
const upload_module_1 = require("../../upload/upload.module");
const casl_module_1 = require("../../casl/casl.module");
const accounts_controller_1 = require("./controllers/accounts.controller");
const users_controller_1 = require("./controllers/users.controller");
const me_controller_1 = require("./controllers/me.controller");
const string_service_1 = require("../../common/utils/string.service");
const constants_1 = require("./interfaces/constants");
const cud_user_service_1 = require("./services/cud-user.service");
const get_user_service_1 = require("./services/get-user.service");
const token_service_1 = require("./services/token.service");
const password_service_1 = require("./services/password.service");
const user_email_service_1 = require("./services/user-email.service");
const statistic_user_service_1 = require("./services/statistic-user.service");
const cudUserService = {
    provide: constants_1.USER_SERVICES.CudUserService,
    useClass: cud_user_service_1.CudUserServiceImpl,
};
const getUserService = {
    provide: constants_1.USER_SERVICES.GetUserService,
    useClass: get_user_service_1.GetUserServiceImpl,
};
const tokenService = {
    provide: constants_1.USER_SERVICES.TokenService,
    useClass: token_service_1.TokenServiceImpl,
};
const passwordService = {
    provide: constants_1.USER_SERVICES.PasswordService,
    useClass: password_service_1.PasswordServiceImpl,
};
const userEmailService = {
    provide: constants_1.USER_SERVICES.UserEmailService,
    useClass: user_email_service_1.UserEmailServiceImpl,
};
const statisticUserService = {
    provide: constants_1.USER_SERVICES.StatisticUserService,
    useClass: statistic_user_service_1.StatisticUserServiceImpl,
};
let UsersModule = class UsersModule {
    configure(consumer) {
        consumer
            .apply(get_user_by_id_middleware_1.GetUserByIdMiddleware)
            .forRoutes({ path: "v1/accounts/:id", method: common_1.RequestMethod.PATCH }, { path: "v1/accounts/:id", method: common_1.RequestMethod.DELETE });
    }
};
exports.UsersModule = UsersModule;
exports.UsersModule = UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, upload_module_1.UploadModule, casl_module_1.CaslModule],
        controllers: [users_controller_1.UsersController, me_controller_1.MeController, accounts_controller_1.AccountsController],
        providers: [
            string_service_1.StringService,
            cudUserService,
            getUserService,
            passwordService,
            tokenService,
            userEmailService,
            statisticUserService,
        ],
        exports: [
            getUserService,
            cudUserService,
            tokenService,
            userEmailService,
            passwordService,
            statisticUserService,
        ],
    })
], UsersModule);
//# sourceMappingURL=users.module.js.map