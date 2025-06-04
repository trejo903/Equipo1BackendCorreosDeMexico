import { ConfigService } from '@nestjs/config';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { join } from 'path';

export const typeOrmConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('DATABASE_HOST'),
  port: configService.get('DATABASE_PORT'),
  username: configService.get('DATABASE_USER'),
  password: configService.get('DATABASE_PASS'),
  database: configService.get('DATABASE_NAME'),
  // ssl: false, // activar para neon
  ssl: {
    rejectUnauthorized: false,
  },
  logging: false,
  synchronize: true, // desactivar para produccion
  entities: [join(__dirname, '/../**/*{.entity,.orm-entity}.{ts,js}')],
});
