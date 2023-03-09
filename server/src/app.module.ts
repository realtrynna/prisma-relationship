import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvConfigModule } from './common/config/config.module';
import { UserModule } from './controllers/user/user.module';
import { HealthCheckModule } from './controllers/health-check/health-check.module';

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
        // EnvConfigModule.register({
        //     isGlobal: true,
        // })
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
