import { BlogTag } from "@prisma/client";
export declare class BlogTagResponseDto implements BlogTag {
    id: number;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    static toBlogTagResponseDto(blogTag: BlogTag | BlogTag[]): any;
}
