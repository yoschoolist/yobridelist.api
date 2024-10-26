import { Type } from "@nestjs/common";
import { PolicyHandler } from "../policies/policy-handler.interface";
export declare const CHECK_POLICIES_KEY = "checkpolicy";
export declare const CheckPolicies: (...handlers: Type<PolicyHandler>[]) => import("@nestjs/common").CustomDecorator<string>;
