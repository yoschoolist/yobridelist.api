"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("./auth/constants");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle("YoBridelist API")
        .setDescription("API document for YoBridelist")
        .setVersion("1.0")
        .addTag("yobridelist")
        .addBearerAuth({
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
    }, constants_1.ACCESS_TOKEN)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup("api", app, document);
    app.enableCors({
        origin: "*",
        methods: ["GET", "HEAD", "POST", "PUT", "PATCH", "DELETE"],
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map