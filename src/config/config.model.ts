// src/config/config.model.ts
import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class TableConfig {
  @IsString()
  name!: string;
}

export class DatabaseConfig {
  @IsString()
  host!: string;

  @IsNumber()
  port!: number;

  @ValidateNested()
  @Type(() => TableConfig)
  table!: TableConfig;
}

export class RootConfig {
  @ValidateNested()
  @Type(() => DatabaseConfig)
  database!: DatabaseConfig;
}
