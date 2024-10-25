import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: any;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(configService: ConfigService);
    validate(payload: any): Promise<{
        id: any;
        email: any;
        role: any;
    }>;
}
export {};
