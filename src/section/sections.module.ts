import { Module } from "@nestjs/common";
import { SectionsService } from "./sections.service";
import { BlogsModule } from "../resources/blogs/blogs.module";

@Module({
    imports: [
        /*SongsModule,
        AlbumsModule,*/
        BlogsModule,
    ],
    providers: [SectionsService],
    exports: [SectionsService],
})
export class SectionsModule {}
