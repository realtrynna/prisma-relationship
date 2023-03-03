import { DynamicModule, Module} from "@nestjs/common";
import { ConfigModule, ConfigModuleOptions } from "@nestjs/config";
import { DiscoveryModule} from "@nestjs/core";

import { EnvConfigService } from "./config.service";

@Module({
    imports: [ConfigModule, DiscoveryModule],
    providers: [EnvConfigService],
})
export class EnvConfigModule {
    static register(options: ConfigModuleOptions): DynamicModule {
        return {
            module: EnvConfigModule,
            providers: [
                {
                    provide: "CONFIG_OPTIONS",
                    useFactory: () => options,
                }
            ]
        }
    }
};