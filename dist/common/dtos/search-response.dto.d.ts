import { User, BlogPost } from "@prisma/client";
import { PagedResponseDto } from "./paged-response.dto";
export declare class SearchResponseDto {
    users: PagedResponseDto<User>;
    blogs: PagedResponseDto<BlogPost>;
}
