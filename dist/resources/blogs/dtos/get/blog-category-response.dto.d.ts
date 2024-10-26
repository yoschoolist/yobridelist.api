import { BlogCategory } from "@prisma/client";
export declare class BlogCategoryResponseDto implements BlogCategory {
    id: number;
    name: string;
    slug: string;
    description: string;
    blogsCount: number;
    createdAt: Date;
    updatedAt: Date;
    static toBlogCategoryResponseDto(blogCategory: BlogCategory | BlogCategory[]): any;
}
