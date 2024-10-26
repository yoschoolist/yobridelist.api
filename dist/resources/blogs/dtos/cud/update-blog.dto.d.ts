export declare class UpdateBlogDto {
    title: string;
    excerpt?: string;
    content: string;
    status: string;
    imageId: string;
    imageUrl: Express.Multer.File;
}
