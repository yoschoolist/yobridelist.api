import { CanActivate, ExecutionContext } from "@nestjs/common";
import { ModuleRef, Reflector } from "@nestjs/core";
import { CaslAbilityFactory } from "../casl-ability.factory";
export declare class PoliciesGuard implements CanActivate {
    private caslAbilityFactory;
    private reflector;
    private moduleRef;
    constructor(caslAbilityFactory: CaslAbilityFactory, reflector: Reflector, moduleRef: ModuleRef);
    canActivate(ctx: ExecutionContext): Promise<boolean>;
}
