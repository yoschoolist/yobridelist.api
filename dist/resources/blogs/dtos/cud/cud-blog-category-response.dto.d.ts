import { BlogCategory } from "@prisma/client";
export declare class CudBlogCategoryResponseDto implements BlogCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
