import { Module } from "@nestjs/common";
import { BlogsController } from "./blogs.controller";
import { PrismaModule } from "src/database/prisma.module";
import { UploadModule } from "src/upload/upload.module";
import { CaslModule } from "src/casl/casl.module";
import { StringService } from "src/common/utils/string.service";
import { GetBlogServiceImpl } from "./services/get-blog.service";
import { BLOG_SERVICES } from "./interfaces/constants";
import { CudBlogServiceImpl } from "./services/cud-blog.service";

const getBlogService = {
    provide: BLOG_SERVICES.GetBlogService,
    useClass: GetBlogServiceImpl,
};

const cudBlogService = {
    provide: BLOG_SERVICES.CudBlogService,
    useClass: CudBlogServiceImpl,
};

@Module({
    imports: [PrismaModule, UploadModule, CaslModule],
    controllers: [BlogsController],
    providers: [StringService, getBlogService, cudBlogService],
    exports: [getBlogService],
})
export class BlogsModule {}
