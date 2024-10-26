import { UploadOptions, UploadResponse, UploadService } from "./interfaces/upload.interface";
export declare class CloudinaryService implements UploadService {
    uploadFile(file: Express.Multer.File, options?: UploadOptions): Promise<UploadResponse>;
    deleteFile(id: string): Promise<void>;
}
