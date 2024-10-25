import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { ForumPost, ForumTopic, Prisma } from '@prisma/client';

@Injectable()
export class ForumService {
  constructor(private prisma: PrismaService) {}

  async createTopic(data: Prisma.ForumTopicCreateInput): Promise<ForumTopic> {
    return this.prisma.forumTopic.create({ data });
  }

  async findAllTopics(): Promise<ForumTopic[]> {
    return this.prisma.forumTopic.findMany({
      include: {
        category: true,
        user: true,
        _count: {
          select: { posts: true },
        },
      },
      orderBy: [
        { isPinned: 'desc' },
        { updatedAt: 'desc' },
      ],
    });
  }

  async findTopicById(id: number): Promise<ForumTopic | null> {
    return this.prisma.forumTopic.findUnique({
      where: { id },
      include: {
        category: true,
        user: true,
        posts: {
          include: {
            user: true,
          },
          where: {
            status: 'active',
          },
          orderBy: { createdAt: 'asc' },
        },
      },
    });
  }

  async createPost(data: Prisma.ForumPostCreateInput): Promise<ForumPost> {
    return this.prisma.forumPost.create({ data });
  }

  async updatePost(id: number, data: Prisma.ForumPostUpdateInput): Promise<ForumPost> {
    return this.prisma.forumPost.update({
      where: { id },
      data,
    });
  }

  async findAllCategories() {
    return this.prisma.forumCategory.findMany({
      include: {
        _count: {
          select: { topics: true },
        },
      },
    });
  }
}