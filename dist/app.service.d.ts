import { ConfigService } from './config/config.service';
export declare class AppService {
    private readonly configService;
    constructor(configService: ConfigService);
    getHello(): string;
}
