"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.awsSecretsLoader = void 0;
const client_secrets_manager_1 = require("@aws-sdk/client-secrets-manager");
const secret_name = "my-database-config";
const region = "ap-south-1";
const awsSecretsLoader = async () => {
    const client = new client_secrets_manager_1.SecretsManagerClient({ region });
    try {
        const response = await client.send(new client_secrets_manager_1.GetSecretValueCommand({
            SecretId: secret_name,
            VersionStage: "AWSCURRENT",
        }));
        if (response.SecretString) {
            return JSON.parse(response.SecretString);
        }
        else {
            throw new Error('SecretString not found in the secret value');
        }
    }
    catch (error) {
        console.error(`Error retrieving secret: ${error.message}`);
        throw error;
    }
};
exports.awsSecretsLoader = awsSecretsLoader;
//# sourceMappingURL=aws-secrets-loader.js.map