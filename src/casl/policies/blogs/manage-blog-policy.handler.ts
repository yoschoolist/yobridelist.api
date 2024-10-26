import { AppAbility } from "src/casl/casl-ability.factory";
import { PolicyHandler } from "../policy-handler.interface";
import { Action } from "src/casl/enums/casl.enum";

export class ManageBlogHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean {
        return ability.can(Action.Manage, "Blog");
    }
}

export class ManageBlogCategoryHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean {
        return ability.can(Action.Manage, "Blog Category");
    }
}

export class ManageBlogTagHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean {
        return ability.can(Action.Manage, "Blog Tag");
    }
}
