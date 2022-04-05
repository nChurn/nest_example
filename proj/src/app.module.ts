import { Module } from '@nestjs/common';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TypeOrmConfigService } from './database/database.config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

import databaseConfig from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [
        databaseConfig
      ],
      envFilePath: ['.env']
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService
    }),
    UserModule,
    AuthModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
