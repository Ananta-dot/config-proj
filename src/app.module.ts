// src/app.module.ts
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypedConfigModule, fileLoader } from 'nest-typed-config';
import { RootConfig } from './config/config.model';
import { ConfigService } from './config/config.service';

@Module({
  imports: [
    TypedConfigModule.forRoot({
      schema: RootConfig,
      load: fileLoader(),
    }),
  ],
  controllers: [AppController],
  providers: [AppService, ConfigService],
})
export class AppModule {}
