"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nest_typed_config_1 = require("nest-typed-config");
const config_model_1 = require("./config/config.model");
const config_service_1 = require("./config/config.service");
const aws_secrets_loader_1 = require("./config/aws-secrets-loader");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nest_typed_config_1.TypedConfigModule.forRootAsync({
                schema: config_model_1.RootConfig,
                load: aws_secrets_loader_1.awsSecretsLoader,
            }),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, config_service_1.ConfigService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map