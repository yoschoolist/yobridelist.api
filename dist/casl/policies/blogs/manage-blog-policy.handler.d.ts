import { AppAbility } from "src/casl/casl-ability.factory";
import { PolicyHandler } from "../policy-handler.interface";
export declare class ManageBlogHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean;
}
export declare class ManageBlogCategoryHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean;
}
export declare class ManageBlogTagHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean;
}
