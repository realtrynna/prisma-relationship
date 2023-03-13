import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
    HealthCheckService,
    HealthCheck,
    HttpHealthIndicator,
    MemoryHealthIndicator,
} from '@nestjs/terminus';

@Controller('health-check')
@ApiTags('헬스 체크')
export class HealthCheckController {
    constructor(
        private readonly healthCheckService: HealthCheckService,
        private readonly http: HttpHealthIndicator,
        private readonly memory: MemoryHealthIndicator,
    ) {}

    @Get()
    @HealthCheck()
    check() {
        console.log('Health Check Execute');
        return this.healthCheckService.check([
            () => this.http.pingCheck('http', 'https://google.com'),
        ]);
    }
}
