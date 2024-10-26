import { ConfigService } from "@nestjs/config";
declare const GithubOAuthGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class GithubOAuthGuard extends GithubOAuthGuard_base {
    private configService;
    constructor(configService: ConfigService);
}
export {};
