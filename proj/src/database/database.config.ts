import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config"
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm'


@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
    constructor(private config: ConfigService){}

    createTypeOrmOptions(connectionName?: string): TypeOrmModuleOptions{
        return {
            type: 'postgres',
            host: this.config.get('database.host'),
            port: this.config.get('database.port'),
            username: this.config.get('database.username'),
            password: String(this.config.get('database.password')),
            database: this.config.get('database.database'),
            synchronize: this.config.get('database.synchronize'),
            dropSchema: false,
            keepConnectionAlive: true,
            //logging: this.config.get('app.nodeEnv') != 'production',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            migrations: [__dirname + '/migrations/**/*{.js,.ts}'],

            // seeds: [__dirname + '/seeds/**/*{.ts, .js}'],
            // factories: [__dirname + '/factories/**/*{.ts,.js}'],
        } as TypeOrmModuleOptions;
    } 
} 