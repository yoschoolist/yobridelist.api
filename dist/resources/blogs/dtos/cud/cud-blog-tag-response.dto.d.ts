import { BlogTag } from "@prisma/client";
export declare class CudBlogTagResponseDto implements BlogTag {
    id: number;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
}
