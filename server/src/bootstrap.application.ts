import { ValidationPipe } from '@nestjs/common';
import { NestApplication, NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { EventEmitter } from 'events';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { build } from 'joi';

export class BootstrapApplication extends EventEmitter {
    #app: NestExpressApplication | null = null;
    static #INSTANCE: BootstrapApplication;
    static #PORT = 2000;

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

        this.#initSwaggerDocs();

        this.#app.listen(BootstrapApplication.#PORT);
    }

    #isProd(): boolean {
        return process.env.NODE_ENV === 'production';
    }

    #getSwaggerConfig() {
        return (
            new DocumentBuilder()
                .setTitle('API')
                .setDescription('API server')
                .addBearerAuth({
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                })
                .setContact(
                    'Developer',
                    'https://github.com/realtrynna',
                    'realtrynna@gmail.com',
                )
                .addServer('http://localhost:1000')
                // .addServer("prod")
                .setVersion('1.0')
                .build()
        );
    }

    #initSwaggerDocs() {
        const config = this.#getSwaggerConfig();
        const document = SwaggerModule.createDocument(
            this.#app as NestExpressApplication,
            config,
        );

        SwaggerModule.setup(
            'docs',
            this.#app as NestExpressApplication,
            document,
            {
                // explorer: true,
                swaggerOptions: {
                    tagsSorter: 'alpha',
                    operationSorter: 'method',
                    defaultModelsExpandDepth: -1,
                    persistAuthorization: true,
                },
            },
        );

        return this;
    }

    static getInstance() {
        if (!BootstrapApplication.#INSTANCE) {
            return (BootstrapApplication.#INSTANCE =
                new BootstrapApplication());
        }
        return BootstrapApplication.#INSTANCE;
    }
}
