import { PrismaService } from '../../database/prisma.service';
import { Conversation, Message, Prisma } from '@prisma/client';
export declare class MessagesService {
    private prisma;
    constructor(prisma: PrismaService);
    createConversation(data: Prisma.ConversationCreateInput): Promise<Conversation>;
    findConversations(userId: number): Promise<Conversation[]>;
    findConversationMessages(conversationId: number): Promise<Message[]>;
    sendMessage(data: Prisma.MessageCreateInput): Promise<Message>;
    updateMessageStatus(id: number, status: 'delivered' | 'read'): Promise<Message>;
}
