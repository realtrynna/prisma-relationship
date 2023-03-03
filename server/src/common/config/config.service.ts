import { Inject, Injectable, OnModuleInit} from "@nestjs/common";
import { ConfigModuleOptions, ConfigService } from "@nestjs/config";
import { Reflector, DiscoveryService, MetadataScanner } from "@nestjs/core";

@Injectable()
export class EnvConfigService implements OnModuleInit {
    constructor(
        private readonly configService: ConfigService,
        private readonly discoveryService: DiscoveryService,
        private readonly metadataScanner: MetadataScanner,
        private readonly reflector: Reflector,
        @Inject("CONFIG_OPTIONS") private readonly options: ConfigModuleOptions,
    ) {}

    async onModuleInit() {
        const controllers = this.discoveryService.getControllers();
        const providers = this.discoveryService.getProviders();

        for (const controller of controllers) {
            const { name, instance } = controller;

            // console.log("이름", name);
            // console.log("인스턴스", instance)
        }

        for (const provider of providers) {
            const { name, instance } = provider;

        }
    }
}