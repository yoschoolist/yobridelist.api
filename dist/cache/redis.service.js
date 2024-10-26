"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const redis_1 = require("redis");
let RedisService = class RedisService {
    async onModuleInit() {
        this.client = (0, redis_1.createClient)({
            url: `redis://default:${process.env.REDIS_PASSWORD}@${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
        });
        this.client.on("error", (err) => console.log("Redis Client Error: ", err));
        await this.client.connect();
    }
    async get(key) {
        try {
            return JSON.parse(await this.client.get(key));
        }
        catch (error) {
            return undefined;
        }
    }
    async set(key, value, expire = 60 * 60 * 12) {
        try {
            await this.client.set(key, value, {
                EX: expire,
            });
        }
        catch (error) { }
    }
    async delete(key) {
        try {
            await this.client.del(key);
        }
        catch (error) { }
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)()
], RedisService);
//# sourceMappingURL=redis.service.js.map