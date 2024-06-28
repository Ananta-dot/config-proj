export declare class TableConfig {
    name: string;
}
export declare class DatabaseConfig {
    host: string;
    port: number;
    table: TableConfig;
}
export declare class RootConfig {
    database: DatabaseConfig;
}
