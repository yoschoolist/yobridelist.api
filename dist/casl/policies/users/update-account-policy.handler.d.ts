import { Request } from "express";
import { AppAbility } from "src/casl/casl-ability.factory";
import { PolicyHandler } from "../policy-handler.interface";
export declare class UpdateAccountHandler implements PolicyHandler {
    private readonly request;
    constructor(request: Request);
    handle(ability: AppAbility): boolean;
}
