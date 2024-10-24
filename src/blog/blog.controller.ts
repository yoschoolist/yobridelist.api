import { Controller, Get, Post, Body, Param, Query, Patch, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreatePostDto } from './dto/create-post.dto';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('posts')
  createPost(@Body() createPostDto: CreatePostDto) {
    return this.blogService.createPost(createPostDto);
  }

  @Get('posts')
  findAllPosts(@Query('published') published?: boolean) {
    return this.blogService.findAllPosts(published);
  }

  @Get('posts/:slug')
  findPostBySlug(@Param('slug') slug: string) {
    return this.blogService.findPostBySlug(slug);
  }

  @Get('categories')
  findAllCategories() {
    return this.blogService.findAllCategories();
  }

  @Get('tags')
  findAllTags() {
    return this.blogService.findAllTags();
  }
}