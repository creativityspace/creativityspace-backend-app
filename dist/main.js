"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const prisma_service_1 = require("./prisma/prisma.service");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('CreativitySpace')
        .setDescription('The CreativitySpace API description')
        .setVersion('0.1')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    const prismaService = app.get(prisma_service_1.PrismaService);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await prismaService.enableShutdownHooks(app);
    app.enableCors({ origin: '*', credentials: true, preflightContinue: false });
    await app.listen(process.env.PORT || 8080);
}
bootstrap();
//# sourceMappingURL=main.js.map