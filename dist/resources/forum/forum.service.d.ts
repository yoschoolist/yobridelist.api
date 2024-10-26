import { PrismaService } from '../../database/prisma.service';
import { ForumPost, ForumTopic, Prisma } from '@prisma/client';
export declare class ForumService {
    private prisma;
    constructor(prisma: PrismaService);
    createTopic(data: Prisma.ForumTopicCreateInput): Promise<ForumTopic>;
    findAllTopics(): Promise<ForumTopic[]>;
    findTopicById(id: number): Promise<ForumTopic | null>;
    createPost(data: Prisma.ForumPostCreateInput): Promise<ForumPost>;
    updatePost(id: number, data: Prisma.ForumPostUpdateInput): Promise<ForumPost>;
    findAllCategories(): Promise<({
        _count: {
            topics: number;
        };
    } & {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string | null;
    })[]>;
}
