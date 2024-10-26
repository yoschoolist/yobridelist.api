import { NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { PrismaService } from "src/database/prisma.service";
export declare class GetUserByIdMiddleware implements NestMiddleware {
    private readonly prisma;
    constructor(prisma: PrismaService);
    use(req: Request, res: Response, next: NextFunction): Promise<void>;
}
