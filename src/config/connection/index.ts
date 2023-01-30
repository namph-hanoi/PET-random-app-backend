import { DataSource, DataSourceOptions } from 'typeorm';
import config from '../env/index';

const ORMConfig = {
    type: config.database.DB_TYPE,
    host: config.database.DB_HOST,
    port: config.database.DB_PORT,
    username: config.database.DB_USER,
    password: config.database.DB_PASSWORD,
    database: config.database.DB_NAME,
    entities: [`${process.cwd()}/src/components/**/model.ts`],
    migrations: [`${process.cwd()}/build/migrations/**/*.js`],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    logging: true,
    synchronize: false,
};

export const AppDataSource = new DataSource(ORMConfig as DataSourceOptions);
