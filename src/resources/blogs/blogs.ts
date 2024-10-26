import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { BlogPost, Prisma } from '@prisma/client';

@Injectable()
export class BlogService {
  constructor(private prisma: PrismaService) {}

  async createPost(data: Prisma.BlogPostCreateInput): Promise<BlogPost> {
    return this.prisma.blogPost.create({ data });
  }

  async findAllPosts(published = true): Promise<BlogPost[]> {
    return this.prisma.blogPost.findMany({
      where: published ? { status: 'published' } : undefined,
      include: {
        author: true,
        categories: true,
        tags: true,
      },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async findPostBySlug(slug: string): Promise<BlogPost | null> {
    return this.prisma.blogPost.findUnique({
      where: { slug },
      include: {
        author: true,
        categories: true,
        tags: true,
      },
    });
  }

  async updatePost(id: number, data: Prisma.BlogPostUpdateInput): Promise<BlogPost> {
    return this.prisma.blogPost.update({
      where: { id },
      data,
    });
  }

  async removePost(id: number): Promise<BlogPost> {
    return this.prisma.blogPost.delete({
      where: { id },
    });
  }

  async findAllCategories() {
    return this.prisma.blogCategory.findMany({
      include: {
        _count: {
          select: { blogPosts: true },
        },
      },
    });
  }

  async findAllTags() {
    return this.prisma.blogTag.findMany({
      include: {
        _count: {
          select: { blogPosts: true },
        },
      },
    });
  }
}