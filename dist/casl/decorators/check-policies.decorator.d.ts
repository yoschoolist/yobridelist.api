import { PolicyHandler } from '../policies.interface';
export declare const CHECK_POLICIES_KEY = "check_policy";
export declare const CheckPolicies: (...handlers: PolicyHandler[]) => import("@nestjs/common").CustomDecorator<string>;
