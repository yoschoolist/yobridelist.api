import { PureAbility } from "@casl/ability";
import { PrismaQuery, Subjects } from "@casl/prisma";
import { User, Playlist, Album, Artist, Genre, Song } from "@prisma/client";
import { JwtPayload } from "src/auth/types/jwt-payload";
import { Action } from "./enums/casl.enum";
export type AppAbility = PureAbility<[
    Action,
    (Subjects<{
        User: User;
        Account: User;
        Playlist: Playlist;
        Album: Album;
        Artist: Artist;
        Genre: Genre;
        Song: Song;
        Dashboard: any;
    }> | "all")
], PrismaQuery>;
export declare class CaslAbilityFactory {
    createForUser(user: JwtPayload): AppAbility;
}
