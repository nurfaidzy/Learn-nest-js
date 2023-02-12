import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASS } = process.env;
export const databaseConnect = () => {
  return [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_HOST,
      port: parseInt(DB_PORT),
      username: DB_USER,
      password: DB_PASS,
      database: DB_NAME,
      entities: [],
      synchronize: true,
    }),
  ];
};
