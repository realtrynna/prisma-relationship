import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './domain/user/user.module';
import { HealthCheckModule } from './domain/health/health-check.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath:
                process.env.NODE_ENV === 'production'
                    ? '.production.env'
                    : process.env.NODE_ENV === 'stage'
                    ? '.stage.env'
                    : 'development.env',
        }),
        UserModule,
        HealthCheckModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
