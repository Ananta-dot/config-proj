// src/config/aws-secrets-loader.ts
import { SecretsManagerClient, GetSecretValueCommand } from "@aws-sdk/client-secrets-manager";

const secret_name = "my-database-config";
const region = "ap-south-1"; // Replace with your region

export const awsSecretsLoader = async (): Promise<any> => {
  const client = new SecretsManagerClient({ region });

  try {
    const response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT",
      })
    );

    if (response.SecretString) {
      return JSON.parse(response.SecretString);
    } else {
      throw new Error('SecretString not found in the secret value');
    }
  } catch (error) {
    console.error(`Error retrieving secret: ${error.message}`);
    throw error;
  }
};
