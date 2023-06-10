import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PrismaService } from './prisma/prisma.service';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,  { cors: true });
  const config = new DocumentBuilder()
  .setTitle('CreativitySpace')
  .setDescription('The CreativitySpace API description')
  .setVersion('0.1')
  .build();


const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app)
  app.enableCors()
  await app.listen(process.env.PORT || 8080);
}
bootstrap();
