import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const whitelist = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:8000',
    'http://127.0.0.1:3000',
    'http://127.0.0.1:3001',
    'http://127.0.0.1:3002',
    // 'http://10.0.2.2:3000',
  ];
  const cors = {
    // origin: ['http://localhost:3000'],
    // origin: '*',
    methods: 'GET, HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    origin: whitelist,
    allowedHeaders: ['content-type'],
    credentials: true,
  };

  app.enableCors(cors);
  await app.listen(3000);
}
bootstrap();
