import { Controller, Get } from '@nestjs/common';
import { TypedBody, TypedRoute } from '@nestia/core';

import { AppService } from './app.service';

interface Dto {
    /**
     * @format email
     */
    email: string;
    /**
     * @type int
     */
    age: number;
}

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @TypedRoute.Post('nestia')
    here(@TypedBody() dto: Dto): string {
        return 'hello';
    }
}
