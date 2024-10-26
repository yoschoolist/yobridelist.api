"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./database/prisma.module");
const users_module_1 = require("./resources/users/users.module");
const vendors_module_1 = require("./resources/vendors/vendors.module");
const bookings_module_1 = require("./resources/bookings/bookings.module");
const blog_module_1 = require("./resources/blog/blog.module");
const forum_module_1 = require("./resources/forum/forum.module");
const messages_module_1 = require("./resources/messages/messages.module");
const reviews_module_1 = require("./resources/reviews/reviews.module");
const locations_module_1 = require("./resources/locations/locations.module");
const services_module_1 = require("./resources/services/services.module");
const casl_module_1 = require("./casl/casl.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            prisma_module_1.PrismaModule,
            casl_module_1.CaslModule,
            users_module_1.UsersModule,
            vendors_module_1.VendorsModule,
            bookings_module_1.BookingsModule,
            blog_module_1.BlogModule,
            forum_module_1.ForumModule,
            messages_module_1.MessagesModule,
            reviews_module_1.ReviewsModule,
            locations_module_1.LocationsModule,
            services_module_1.ServicesModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map