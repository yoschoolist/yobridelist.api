import { AppAbility } from "src/casl/casl-ability.factory";
import { PolicyHandler } from "../policy-handler.interface";
export declare class ManageArtistHandler implements PolicyHandler {
    handle(ability: AppAbility): boolean;
}
