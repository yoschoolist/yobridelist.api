import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { Conversation, Message, Prisma } from '@prisma/client';

@Injectable()
export class MessagesService {
  constructor(private prisma: PrismaService) {}

  async createConversation(data: Prisma.ConversationCreateInput): Promise<Conversation> {
    return this.prisma.conversation.create({ data });
  }

  async findConversations(userId: number): Promise<Conversation[]> {
    return this.prisma.conversation.findMany({
      where: { userId },
      include: {
        vendor: true,
        messages: {
          take: 1,
          orderBy: { createdAt: 'desc' },
        },
      },
      orderBy: { lastMessageAt: 'desc' },
    });
  }

  async findConversationMessages(conversationId: number): Promise<Message[]> {
    return this.prisma.message.findMany({
      where: { conversationId },
      include: {
        sender: true,
      },
      orderBy: { createdAt: 'asc' },
    });
  }

  async sendMessage(data: Prisma.MessageCreateInput): Promise<Message> {
    const message = await this.prisma.message.create({ data });
    
    await this.prisma.conversation.update({
      where: { id: message.conversationId },
      data: { lastMessageAt: message.createdAt },
    });

    return message;
  }

  async updateMessageStatus(id: number, status: 'delivered' | 'read'): Promise<Message> {
    return this.prisma.message.update({
      where: { id },
      data: { status },
    });
  }
}