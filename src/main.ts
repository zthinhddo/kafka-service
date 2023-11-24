import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { microserviceConfig } from 'config/microservice.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Establish microservice connections (E.g. Kafka)
  app.connectMicroservice(microserviceConfig);
  app.startAllMicroservices();  

  app.listen(3000);
}
bootstrap();
