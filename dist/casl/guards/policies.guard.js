"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PoliciesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const casl_ability_factory_1 = require("../casl-ability.factory");
const check_policies_decorator_1 = require("../decorators/check-policies.decorator");
let PoliciesGuard = class PoliciesGuard {
    constructor(caslAbilityFactory, reflector, moduleRef) {
        this.caslAbilityFactory = caslAbilityFactory;
        this.reflector = reflector;
        this.moduleRef = moduleRef;
    }
    async canActivate(ctx) {
        const policiesHandlersRef = this.reflector.get(check_policies_decorator_1.CHECK_POLICIES_KEY, ctx.getHandler()) || [];
        const policiesHandlersRefLength = policiesHandlersRef.length;
        if (policiesHandlersRefLength === 0)
            return true;
        const contextId = core_1.ContextIdFactory.create();
        this.moduleRef.registerRequestByContextId(ctx.switchToHttp().getRequest(), contextId);
        const policyHandlers = [];
        for (let i = 0; i < policiesHandlersRefLength; i++) {
            const policyHandlerRef = policiesHandlersRef[i];
            const policyScope = this.moduleRef.introspect(policyHandlerRef).scope;
            let policyHandler;
            if (policyScope === common_1.Scope.DEFAULT) {
                policyHandler = this.moduleRef.get(policyHandlerRef, {
                    strict: false,
                });
            }
            else {
                policyHandler = await this.moduleRef.resolve(policyHandlerRef, contextId, { strict: false });
            }
            policyHandlers.push(policyHandler);
        }
        const { user } = ctx.switchToHttp().getRequest();
        const ability = this.caslAbilityFactory.createForUser(user);
        return policyHandlers.every((handler) => handler.handle(ability));
    }
};
exports.PoliciesGuard = PoliciesGuard;
exports.PoliciesGuard = PoliciesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [casl_ability_factory_1.CaslAbilityFactory,
        core_1.Reflector,
        core_1.ModuleRef])
], PoliciesGuard);
//# sourceMappingURL=policies.guard.js.map