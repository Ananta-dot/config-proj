// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypedConfigModule } from 'nest-typed-config';
import { RootConfig } from './config/config.model';
import { ConfigService } from './config/config.service';
import { awsSecretsLoader } from './config/aws-secrets-loader';

@Module({
  imports: [
    TypedConfigModule.forRootAsync({
      schema: RootConfig,
      load: awsSecretsLoader,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
