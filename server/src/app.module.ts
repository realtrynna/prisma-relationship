import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { UserModule} from "./controllers/user/user.module";
import { AppController } from './app.controller';
import { AppService } from './app.service';

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
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
