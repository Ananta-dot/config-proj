// src/config/config.service.ts
import { Injectable } from '@nestjs/common';
import { RootConfig } from './config.model';

@Injectable()
export class ConfigService {
  constructor(private readonly config: RootConfig) {}

  getConfig(): RootConfig {
    return this.config;
  }
}
