import { OnModuleInit } from "@nestjs/common";
import { CacheService } from "./interfaces/cache.interface";
export declare class RedisService implements OnModuleInit, CacheService {
    private client;
    onModuleInit(): Promise<void>;
    get(key: string): Promise<any>;
    set(key: string, value: string, expire?: number): Promise<void>;
    delete(key: string): Promise<void>;
}
