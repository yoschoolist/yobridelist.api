export declare class CreateBlogDto {
    title: string;
    slug: string;
    except?: string;
    content: string;
    publishedAt?: Date;
    image: Express.Multer.File;
    categoryIds?: number[];
    tagIds?: number[];
    authorId: number;
}
