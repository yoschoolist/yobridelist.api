import { INestApplication, OnModuleInit } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
export declare class PrismaService extends PrismaClient implements OnModuleInit {
    constructor();
    onModuleInit(): Promise<void>;
    enableShutdownHooks(app: INestApplication): Promise<void>;
    toPrismaOrderByObject(text: string): {
        [x: string]: string;
    };
    toPrismaConnectObject(array: string[]): {
        id: string;
    }[];
}
