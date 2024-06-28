// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  constructor(private readonly configService: ConfigService) {}

  getHello(): string {
    const config = this.configService.getConfig();
    return `Database host: ${config.database.host}, port: ${config.database.port}, table: ${config.database.table.name}`;
  }
}
