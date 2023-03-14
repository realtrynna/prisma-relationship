import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EventEmitter } from 'events';

import { AppModule } from './app.module';

export class BootstrapApplication extends EventEmitter {
    #app: NestExpressApplication | null = null;
    static #INSTANCE: BootstrapApplication;
    static #PORT = 1000;

    private constructor() {
        super();
        this.on('listen', () => {
            this.start().then((r) => console.log(BootstrapApplication.#PORT));
        });
    }

    async start(): Promise<void> {
        if (!this.#isProd()) {
            console.log('Developoment Mode');
        }

        this.#app = await NestFactory.create<NestExpressApplication>(AppModule);

        // this.#app.useGlobalPipes(
        //     new ValidationPipe({
        //         transform: false,
        //     }),
        // );

        this.#app.listen(BootstrapApplication.#PORT);
    }

    #isProd(): boolean {
        return process.env.NODE_ENV === 'production';
    }

    static getInstance() {
        if (!BootstrapApplication.#INSTANCE) {
            return (BootstrapApplication.#INSTANCE =
                new BootstrapApplication());
        }
        return BootstrapApplication.#INSTANCE;
    }
}
