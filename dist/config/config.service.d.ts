import { RootConfig } from './config.model';
export declare class ConfigService {
    private readonly config;
    constructor(config: RootConfig);
    getConfig(): RootConfig;
}
